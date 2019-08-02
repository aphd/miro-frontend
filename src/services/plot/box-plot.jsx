import React from "react";
import "chartjs-chart-box-and-violin-plot/build/Chart.BoxPlot.min.js";

class BoxPlot extends React.Component {
    constructor() {
        super();
        this.canvas = React.createRef();
    }

    randomValues(count, min, max) {
        const delta = max - min;
        return Array.from({ length: count }).map(
            () => Math.random() * delta + min
        );
    }

    componentDidMount() {
        this.drawRectInCanvas();
    }

    drawRectInCanvas() {
        const ctx = this.canvas.current.getContext("2d");
        ctx.fillRect(5, 5, 200, 200);
        const options = {
            type: "boxplot",
            data: {
                labels: ["Col_a"],
                datasets: [
                    {
                        label: "Dataset 1",
                        borderColor: "red",
                        borderWidth: 1,
                        outlierRadius: 3,
                        itemRadius: 3,
                        outlierColor: "#999999",
                        data: [this.randomValues(100, 0, 10)]
                    }
                ]
            }
        };
        // TODO remove window.Chart
        new window.Chart(ctx, options);
    }

    render() {
        return <canvas ref={this.canvas} />;
    }
}
export default BoxPlot;
