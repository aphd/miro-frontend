import React from "react";
import Highcharts from "highcharts/highmaps";
import HighchartsReact from "highcharts-react-official";
import _ from "lodash";

class LineTimeSeries extends React.Component {
    acceptedDataframe = () => ["d3P"];
    render(props, cols) {
        return React.createElement(HighchartsReactPlot, {
            options: getConfig(props, cols)
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

function getConfig(props, cols) {
    return {
        title: {
            text: "Line Time Series"
        },
        xAxis: {
            categories: props.data.slice(1)
        },
        series: cols
            .filter(o => o.type === "n3P")
            .map(o => ({ name: o.data[0], data: o.data.slice(1) }))
    };
}

export default LineTimeSeries;
