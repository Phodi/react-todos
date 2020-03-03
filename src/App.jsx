import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import About from "./components/About"

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
    this.state.todos.push(newTodo);
    this.setState({ todos: this.state.todos });
  };
  render() {
    return (
      <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route exact path="/"
            render={props => (
              <div>
                <AddTodo addTodo={this.addTodo} />
                <Todos
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  delTodo={this.delTodo}
                />
              </div>
            )}
          />
          <Route exact path="/about" render={props => (<About/>)}/>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
