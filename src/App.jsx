import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <h3>AAA</h3>
          <Todos />
        </div>
      </div>
    );
  }
}

export default App;
