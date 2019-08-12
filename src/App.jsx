import React from "react";
import "./App.css";
import SheetJSApp from "./services/spreadsheet";
import { renderPlot } from "./services/plot";
import Reducer from "./reducer";

class App extends React.Component {
    state = {
        data: [],
        cols: []
    };
    handleLoadFile = state => {
        this.setState({ cols: new Reducer(state) });
    };

    render() {
        return (
            <React.Fragment>
                <div className="row">{renderPlot(this.state.cols)}</div>
                <SheetJSApp
                    data={this.state.data}
                    onLoadFile={this.handleLoadFile}
                />
            </React.Fragment>
        );
    }
}

export default App;
