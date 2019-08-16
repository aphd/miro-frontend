import React from "react";
import Highcharts from "highcharts/highmaps";
import HighchartsReact from "highcharts-react-official";

class HeatMap extends React.Component {
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

export default HeatMap;
