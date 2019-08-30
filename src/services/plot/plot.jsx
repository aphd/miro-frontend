import React from "react";
import * as Plot from "../../services/plot/index.jsx";

export function renderPlot(cols) {
    let plotDispatcher = {};
    Object.values(Plot).forEach(className => {
        let aDFs = Reflect.construct(className, [])["acceptedDataframe"]();
        aDFs.forEach(aDF => (plotDispatcher[aDF] = className));
    });
    cols = cols.concat({
        normalized: "heatMap",
        data: cols.map(o => o.data)
    });
    return cols.map((o, i) => {
        return React.createElement(
            "div",
            { className: "col-lg-4 col-md-6", key: i },
            React.createElement("h4", { className: "text-center" }, o.data[0]),
            Reflect.construct(plotDispatcher[o.normalized], [])["render"](o)
        );
    });
}
