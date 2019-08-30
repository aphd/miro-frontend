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
                backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
            }
        ]
    };
}

export default Bar;
