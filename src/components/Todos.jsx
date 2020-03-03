import React, { Component } from 'react';
import Item from "./TodoItem"

class Todos extends Component {
    render() {
        return this.props.todos.map( todo => (
        <Item todo_item={todo}
                key={todo.id}
                markComplete={this.props.markComplete}
                delTodo={this.props.delTodo} />
        ))
    }
}

export default Todos;