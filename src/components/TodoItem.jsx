import React, { Component } from 'react';

class TodoItem extends Component {
    getStyle =  () => {
        return  {
          background: '#f4f4f4',
          padding: '10px',
          borderBottom: '1px #ccc dotted',
          textDecoration: this.props.todo_item.completed ? 'line-through':'none'
        }
    }
    checkCompleted = () => {
        return this.props.todo_item.completed ? 'checked':'';
    }
    render() {
        const { id, title} = this.props.todo_item
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox"
                            checked={this.checkCompleted()}
                            onChange={this.props.markComplete} />
                    {' '}{title}
                    <button style={btnStyle} onClick={this.props.delTodo} >X</button>
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