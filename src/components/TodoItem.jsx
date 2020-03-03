import React, { Component } from 'react';

class TodoItem extends Component {
    getStyle =  () => {
        return  {
          background: '#f4f4f4',
          padding: '10px',
          borderBottom: '1px #ccc dotted',
        //   textDecoration: this.props.todo.completed ? 'line-through':'none'
        }
    }
    render() {
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" />
                    todo info
                    <button style={btnStyle}>KUY</button>
                </p>
            </div>
        );
    }
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
  }

export default TodoItem;