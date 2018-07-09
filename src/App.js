import React, { Component } from "react";

import GraphDisplay from "./containers/GraphDisplay";
import GraphOptions from "./containers/GraphOptions";
import "./app.css";

class App extends Component {
  render() {
    return (
      <div className="weaterStation">
        <div className="dataContainer">
          <GraphDisplay />
        </div>
        <div className="optionsContainer">
          <GraphOptions />
        </div>
      </div>
    );
  }
}

export default App;
