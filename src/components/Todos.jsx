import React, { Component } from 'react';
import Item from "./TodoItem"

class Todos extends Component {
    render() {
        return (
            <div>
                <h4>Todos Components</h4>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
            </div>
        );
    }
}

export default Todos;