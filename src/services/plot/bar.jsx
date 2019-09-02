import React from "react";
import _ from "lodash";
import * as Plot from "react-chartjs-2";

class Bar extends React.Component {
    acceptedDataframe = () => ["n2P", "s2P"];
    render(props) {
        return React.createElement(Plot.Bar, {
            data: getConfigDefault(_.countBy(props.data.slice(1))),
            options: {
                title: {
                    display: true,
                    text: props.data[0]
                },
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true
                            }
                        }
                    ]
                }
            }
        });
    }
}

// TODO dupicated code
function getConfigDefault(data) {
    return {
        labels: Object.keys(data),
        datasets: [
            {
                data: Object.values(data),
                backgroundColor: Array.from(
                    { length: Object.keys(data).length },
                    () =>
                        "#" + Math.floor(Math.random() * 16777215).toString(16)
                )
            }
        ]
    };
}

export default Bar;
