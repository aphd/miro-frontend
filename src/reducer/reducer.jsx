import React from "react";

class Reducer extends React.Component {
    constructor(props) {
        super(props);
        window.props = props.cols
            .filter(o => !this.arePK(o))
            .filter(o => !this.areManyCategorical(o));
    }
    // Check if there is a Primary Key
    arePK = o => {
        return (
            o.type === "n" &&
            o.distinctValuesCount === o.data.length - 1 &&
            !this.areFLoat(o.data.slice(1))
        );
    };

    areFLoat = nums => {
        return nums.some(num => num % 1 !== 0);
    };

    areManyCategorical = o => o.type === "s" && o.distinctValuesCount > 5;

    strings2Numbers() {
        this.props.cols.map(o =>
            o.type === "n" ? o.map((o, i) => (i > 0 ? Number(o) : o)) : o
        );
    }
}

export default Reducer;
