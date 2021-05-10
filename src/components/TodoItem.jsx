import React from 'react';

function TodoItem(props) {

    return (
        <div>
            <h5>{props.todo.sno}</h5>
            <h5>{props.todo.title}</h5>
            <h5>{props.todo.desc}</h5>
            <button className="btn btn-sm btn-danger" onClick={() => { props.onDelete(props.todo) }}>Delete</button>
            <hr />
        </div>
    );
}

export default TodoItem;