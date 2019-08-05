import { zipWith } from "lodash";

export const plotConfig = plotName => {
    return cfg[plotName] || cfg.default;
};

const boxPlot = function() {
    const rows = this.filter(o => o.type === "n").map(o => o.data);
    const labels = rows.map(o => o[0]);
    const numbers = rows.map(o => o.slice(1)).map(o => o.map(s => Number(s)));
    return {
        type: "boxplot",
        data: {
            labels: labels,
            datasets: [
                {
                    borderColor: "red",
                    data: numbers
                }
            ]
        }
    };
};

const getLabels = function() {
    const labels = this.find(obj => obj.type === "s");
    return labels ? labels.data.slice(1) : this.map(o => o.head);
};

const defaultCfg = function() {
    const labels = getLabels.bind(this)();
    const numbers = this.filter(obj => obj.type === "n");
    return {
        labels: labels,
        datasets: numbers.map(obj => ({
            label: obj.data[0],
            data: obj.data.slice(1)
        }))
    };
};

const bubbleOrScatter = function() {
    return {
        datasets: zipWith(
            ...this.map(obj => obj.data.slice(1)),
            (l, x, y, r) => ({ label: l, data: [{ x: x, y: y, r: r }] })
        )
    };
};

const cfg = {
    Bubble: bubbleOrScatter,
    Scatter: bubbleOrScatter,
    BoxPlot: boxPlot,
    default: defaultCfg
};
