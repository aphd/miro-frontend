import React from "react";
import "chartjs-chart-box-and-violin-plot/build/Chart.BoxPlot.js";

class BoxOrViolinPlot extends React.Component {
    constructor(props) {
        super(props);
        this.canvas = React.createRef();
    }

    componentDidMount() {
        const ctx = this.canvas.current.getContext("2d");
        const Chart = window.Chart; // TODO see the issue https://github.com/jerairrest/react-chartjs-2/issues/424
        new Chart(ctx, this.props.data);
    }

    render() {
        return <canvas ref={this.canvas} />;
    }
}

export default BoxOrViolinPlot;
