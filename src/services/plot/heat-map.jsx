import React from "react";
import Highcharts from "highcharts/highmaps";
import HighchartsReact from "highcharts-react-official";
import { pearsonCorrelation } from "../../utils";

class HeatMap extends React.Component {
    acceptedDataframe = () => "heatMap";
    render(props) {
        return React.createElement(HighchartsReactHeatMap, {
            options: getConfigHeatMap(props)
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

function transformData(data, categories) {
    return [].concat(
        ...data.map((v, i) =>
            data
                .slice(i + 1)
                .map((w, j) => [
                    categories.indexOf(v[0]),
                    categories.indexOf(w[0]),
                    pearsonCorrelation(v.slice(1), w.slice(1)).toFixed(1)
                ])
        )
    );
}

function getConfigHeatMap(props) {
    let data = props.data;
    let categories = data.map(v => v[0]);
    return {
        title: {
            text: null
        },
        chart: {
            type: "heatmap"
        },
        xAxis: {
            categories: categories
        },
        yAxis: {
            categories: categories
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
                data: transformData(data, categories),
                dataLabels: {
                    enabled: true,
                    color: "#000000"
                }
            }
        ]
    };
}

export default HeatMap;
