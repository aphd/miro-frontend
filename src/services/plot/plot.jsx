import React from "react";
import { plotMatch } from "./plotConfig";

export function renderPlot(cols) {
    if (cols.length > 0) {
        cols = cols.concat({
            normalized: "heatMap",
            data: cols.map(o => o.data)
        });
    }

    return cols.map((o, i) => {
        return React.createElement(
            "div",
            { className: "col-lg-4 col-md-6", key: i },
            React.createElement("h4", { className: "text-center" }, o.data[0]),
            plotMatch(o)
        );
    });
}
