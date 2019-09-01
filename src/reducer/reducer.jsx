import React from "react";

class Reducer extends React.Component {
    constructor(props) {
        super(props);
        this.props = props.cols
            .filter(o => !this.arePK(o))
            .filter(o => !this.areManyCategorical(o));
        this.normalize();
        return this.props;
    }
    areFLoat = nums => {
        return nums.some(num => num % 1 !== 0);
    };
    areManyCategorical = o => o.type === "s" && o.distinctValuesCount > 5;
    arePK = o => {
        return (
            o.type === "n" &&
            o.distinctValuesCount === o.data.length - 1 &&
            !this.areFLoat(o.data.slice(1))
        );
    };
    strings2Numbers() {
        this.props.cols.map(o =>
            o.type === "n" ? o.map((o, i) => (i > 0 ? Number(o) : o)) : o
        );
    }
    normalize() {
        this.props.map(o => {
            let result = String(o.distinctValuesCount);
            let replaceMap = new Map();
            replaceMap.set(/^[1-3]$/, "1P");
            replaceMap.set(/^[4-9]$/, "2P");
            replaceMap.set(/^[1-9]\d{1,}$/, "3P");
            replaceMap.forEach(function(newString, old) {
                result = result.replace(old, o.type + newString);
            });
            o.type = result;
        });
    }
}

export default Reducer;
