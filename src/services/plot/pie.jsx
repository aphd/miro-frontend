import React from "react";
import _ from "lodash";
import * as Plot from "react-chartjs-2";

class Pie extends React.Component {
    constructor(props) {
        super(props);
        return React.createElement(Plot.Pie, {
            data: getConfigDefault(_.countBy(props.data.slice(1)))
        });
    }
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

export default Pie;
