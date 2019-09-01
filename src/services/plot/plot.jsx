import React from "react";
import * as Plot from "../../services/plot/index.jsx";

export function renderPlot(cols) {
    let plotDispatcher = {};
    let styleDispatcher = {
        heatMap: "col-lg-12 col-md-12",
        d3P: "col-lg-12 col-md-12"
    };
    Object.values(Plot).forEach(className => {
        let aDFs = Reflect.construct(className, [])["acceptedDataframe"]();
        aDFs.forEach(aDF => (plotDispatcher[aDF] = className));
    });
    cols = [
        {
            type: "heatMap",
            data: cols.map(o => o.data)
        }
    ].concat(cols);
    return cols.map(
        (o, i) =>
            plotDispatcher[o.type] &&
            React.createElement(
                "div",
                {
                    className: styleDispatcher[o.type] || "col-lg-4 col-md-6",
                    key: i
                },
                Reflect.construct(plotDispatcher[o.type], [])["render"](o, cols)
            )
    );
}
