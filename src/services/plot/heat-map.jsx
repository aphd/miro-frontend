import React from "react";
import Highcharts from "highcharts/highmaps";
import HighchartsReact from "highcharts-react-official";

class HeatMap extends React.Component {
    acceptedDataframe = () => "heatMap";
    render(props) {
        return React.createElement(HighchartsReactHeatMap, {
            options: getConfigHeatMap(this.props)
        });
    }
}

class HighchartsReactHeatMap extends React.Component {
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

export default HeatMap;
