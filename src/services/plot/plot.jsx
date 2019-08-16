import React from "react";
import _ from "lodash";
import Bar from "./bar";
import Pie from "./pie";
import Box from "./box";
import HeatMap from "./heat-map";

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

const plotMatch = o => {
    return new cfg[o.normalized](o);
};

const cfg = {
    n1P: Pie,
    s1P: Pie,
    n2P: Bar,
    s2P: Bar,
    n3P: Box,
    heatMap: HeatMap
};
