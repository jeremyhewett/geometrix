import React, { Component} from "react";
import "./App.css";

const graph = {
  wheeSize: [],
  axleHeight: ['wheelSize']
};

class App extends Component {

  constructor() {
    super();
    this.state = {};
  }

  onChange(name) {

  }

  render() {
    return(
      <div className="App">
        <label>Wheel Size</label>
        <input type="text" onChange={() => this.onChange('wheelSize')} />
      </div>
    );
  }

}

class Param {
  constructor(name) {
    this.name = name;
    this.fixed = false;
    this.value = null;
  }
}

export default App;