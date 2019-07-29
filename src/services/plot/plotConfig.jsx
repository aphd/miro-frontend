import { zipWith } from "lodash";

export const plotConfig = plotName => {
    return cfg[plotName] || cfg.default;
};

const getDefaultCfg = function() {
    const labels = this.find(obj => obj.type === "s");
    const numbers = this.filter(obj => obj.type === "n");
    return {
        labels: labels.data.slice(1),
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
    default: getDefaultCfg
};
