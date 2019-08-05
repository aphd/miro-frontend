import React from "react";
import * as Plot from "react-chartjs-2";
import { plotConfig } from "./plotConfig";
import BoxPlot from "./box-plot";

export function renderPlot(cols) {
    if (cols.length > 0) {
        return getPlots().map((plot, i) => {
            return React.createElement(
                "div",
                { className: "col-lg-4 col-md-6", key: i },
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
    // TODO will be possible to get the list from PLOT?
    return [
        BoxPlot,
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
