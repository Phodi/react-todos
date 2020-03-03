import React, { Component } from "react";
import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import { v4 as uuidv4 } from 'uuid'

class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "something",
        completed: false
      },
      {
        id: uuidv4(),
        title: "things",
        completed: true
      },
      {
        id: uuidv4(),
        title: "something AHAHAHAHAH",
        completed: false
      },
      {
        id: uuidv4(),
        title: "What",
        completed: false
      }
    ]
  };
  markComplete = id => {
    const newTodos = this.state.todos.map(todo => {
      if (todo.id === id) todo.completed = !todo.completed;
      return todo;
    });
    this.setState({ todos: newTodos });
  };
  delTodo = id => {
    let newTodos = this.state.todos;
    newTodos = newTodos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({ todos: newTodos });
  };
  addTodo = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false
    };
    this.state.todos.push(newTodo)
    this.setState({todos: this.state.todos})
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <h3>Todos</h3>
          <AddTodo addTodo={this.addTodo} />
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
