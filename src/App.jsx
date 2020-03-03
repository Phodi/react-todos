import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'something',
        completed: false
      },
      {
        id: 2,
        title: 'things',
        completed: true
      },
      {
        id: 3,
        title: 'something AHAHAHAHAH',
        completed: false
      },
      {
        id: 4,
        title: 'What',
        completed: false
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
