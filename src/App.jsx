import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "something",
        completed: false
      },
      {
        id: 2,
        title: "things",
        completed: true
      },
      {
        id: 3,
        title: "something AHAHAHAHAH",
        completed: false
      },
      {
        id: 4,
        title: "What",
        completed: false
      }
    ]
  };
  markComplete = id => {
    console.log("mark " + id);
  };
  delTodo = id => {
    console.log("del " + id);
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <h3>AAA</h3>
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
