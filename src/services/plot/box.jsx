import React from "react";
import _ from "lodash";
import "chartjs-chart-box-and-violin-plot/build/Chart.BoxPlot.js";
import BoxPlot from "./box-plot";

class Box extends React.Component {
    acceptedDataframe = () => "n3P";
    render(props) {
        return React.createElement(BoxPlot, {
            data: getConfigBox(props)
        });
    }
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
export default Box;
