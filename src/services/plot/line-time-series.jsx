import React from "react";
import Highcharts from "highcharts/highmaps";
import HighchartsReact from "highcharts-react-official";
import _ from "lodash";

class LineTimeSeries extends React.Component {
    acceptedDataframe = () => ["d3P"];
    render(props) {
        return React.createElement(HighchartsReactPlot, {
            options: getConfig(props)
        });
    }
}

class HighchartsReactPlot extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }
    render() {
        return (
            <HighchartsReact
                highcharts={Highcharts}
                options={this.props.options}
            />
        );
    }
}

function getConfig(props) {
    return {
        title: {
            text: "Line Time Series"
        },
        series: [
            {
                data: getData()
            }
        ]
    };
}

function getData() {
    return [
        [1167609600000, 0.7537],
        [1167696000000, 0.7537],
        [1167782400000, 0.7559],
        [1167868800000, 0.7631]
    ];
}

export default LineTimeSeries;
