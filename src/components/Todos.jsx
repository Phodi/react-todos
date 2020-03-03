import React, { Component } from 'react';
import Item from "./TodoItem"

class Todos extends Component {
    render() {
        return this.props.todos.map( todo => (<Item todo_item={todo}/>))
    }
}

export default Todos;