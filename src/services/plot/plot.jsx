import React from "react";
import * as Plot from "../../services/plot/index.jsx";

export function renderPlot(cols) {
    let plotDispatcher = {};
    Object.values(Plot).forEach(className => {
        let acceptedDataframes = new className().acceptedDataframe().split(",");
        acceptedDataframes.forEach(aDF => (plotDispatcher[aDF] = className));
    });
    cols = [
        {
            normalized: "heatMap",
            data: cols.map(o => o.data),
            className: "col-lg-12 col-md-12"
        }
    ].concat(cols);
    return cols.map(
        (o, i) =>
            plotDispatcher[o.normalized] && // Add plot class for d1P, d*P
            React.createElement(
                "div",
                { className: o.className || "col-lg-4 col-md-6", key: i },
                Reflect.construct(plotDispatcher[o.normalized], [])["render"](o)
            )
    );
}
