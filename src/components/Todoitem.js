import React, { Component } from 'react'
import PropTypes from'prop-types';

export class Todoitem extends Component {
    getStyle = () => {
        return {
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            background: '#f4f4f4',
            padding: '10',
            borderBottom: '1px #ccc dotted',
        }
    }

    render() {

        const { id, title, completed  } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" checked = {completed} onChange={this.props.markComplete.bind(this, id)} />{' '}
                    { title }
                    <button onClick={this.props.delTodo.bind(this, id)}  style={btnStyle}>x</button>
                 </p>   
            </div>
        )
    }
}

//PropTypes
Todoitem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color:'#fff',
    border:'none',
    padding: '2px 6px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
    align: 'right'
    
}


export default Todoitem
