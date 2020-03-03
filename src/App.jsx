import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'something',
        complete: false
      },
      {
        id: 2,
        title: 'things',
        complete: true
      },
      {
        id: 3,
        title: 'something AHAHAHAHAH',
        complete: false
      },
      {
        id: 4,
        title: 'What',
        complete: false
      },
    ]
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <h3>AAA</h3>
          <Todos todos={this.state.todos} />
        </div>
      </div>
    );
  }
}

export default App;
