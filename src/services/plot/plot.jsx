import React from "react";
import * as Plot from "react-chartjs-2";
import { plotConfig } from "./plotConfig";

export function renderPlot(cols) {
    if (cols.length > 0) {
        return getPlots().map((plot, i) => {
            return React.createElement(
                "div",
                { className: "col-md", key: i },
                React.createElement(plot, {
                    key: i,
                    data: getConfig(cols, plot.name)
                })
            );
        });
    }
}

function getConfig(cols, plotName) {
    return plotConfig(plotName).bind(cols)();
}

function getPlots() {
    return [
        Plot.Doughnut,
        Plot.Pie,
        Plot.Radar,
        Plot.Bar,
        Plot.HorizontalBar,
        Plot.Line,
        Plot.Polar,
        Plot.Bubble,
        Plot.Scatter
    ];
}
