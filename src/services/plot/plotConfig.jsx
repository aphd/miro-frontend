import React from "react";
import * as Plot from "react-chartjs-2";
import BoxPlot from "./box-plot";
import _ from "lodash";

export const plotMatch = o => {
    return cfg[o.normalized](o);
};

const cfg = {
    n1P: pie,
    s1P: pie,
    n2P: bar,
    s2P: bar,
    n3P: box
};

function pie(o) {
    return React.createElement(Plot.Pie, {
        // key: i,
        data: getConfigDefault(_.countBy(o.data.slice(1)))
    });
}

function bar(o) {
    return React.createElement(Plot.Bar, {
        data: getConfigDefault(_.countBy(o.data.slice(1)))
    });
}

function box(o) {
    return React.createElement(BoxPlot, {
        data: getConfigBox(o)
    });
}

function getConfigDefault(data) {
    return {
        labels: Object.keys(data),
        datasets: [
            {
                data: Object.values(data),
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
            }
        ]
    };
}

function getConfigBox(o) {
    return {
        type: "boxplot",
        data: {
            datasets: [
                {
                    label: o.data[0],
                    borderColor: "red",
                    borderWidth: 1,
                    outlierRadius: 3,
                    itemRadius: 3,
                    outlierColor: "#999999",
                    data: [o.data.slice(1)]
                }
            ]
        },
        options: {
            responsive: true,
            legend: {
                position: "top"
            },
            scales: {
                xAxes: [
                    {
                        categoryPercentage: 0.9,
                        barPercentage: 0.8
                    }
                ]
            }
        }
    };
}
