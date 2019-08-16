import React from "react";
import * as Plot from "react-chartjs-2";
import BoxPlot from "./box-plot";
import HeatMap from "./heat-map";
import _ from "lodash";
import Highcharts from "highcharts/highmaps";

export const plotMatch = o => {
    return cfg[o.normalized](o);
};

const cfg = {
    n1P: pie,
    s1P: pie,
    n2P: bar,
    s2P: bar,
    n3P: box,
    heatMap: heatMap
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

function heatMap(o) {
    return React.createElement(HeatMap, {
        options: getConfigHeatMap(o)
    });
}

function getConfigBox(o) {
    // TODO hardcoding
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

function getConfigHeatMap(o) {
    window.o = o;
    return {
        title: {
            text: null
        },
        chart: {
            type: "heatmap"
        },
        xAxis: {
            categories: ["Alexander", "Marie"]
        },

        yAxis: {
            categories: ["Monday", "Tuesday"]
        },
        colorAxis: {
            min: 0,
            minColor: "#FFFFFF",
            maxColor: Highcharts.getOptions().colors[0]
        },

        tooltip: {
            formatter: function() {
                return (
                    "<b>" +
                    this.series.xAxis.categories[this.point.x] +
                    "</b> sold <br><b>" +
                    this.point.value +
                    "</b> items on <br><b>" +
                    this.series.yAxis.categories[this.point.y] +
                    "</b>"
                );
            }
        },
        series: [
            {
                borderWidth: 1,
                data: [[0, 0, 10], [0, 1, 19], [1, 0, 92], [1, 1, 58]],
                dataLabels: {
                    enabled: true,
                    color: "#000000"
                }
            }
        ]
    };
}
