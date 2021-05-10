import React from 'react';
import TodoItem from './TodoItem';

function TodosList(props) {

    return (

        <div>
            <h2>Todos List</h2>
            {props.todos.length === 0 ? "Nothing to Display" :
                props.todos.map((todo) => {
                    return <TodoItem key={todo.sno} todo={todo} onDelete={props.onDelete}></TodoItem >;
                })
            }
        </div>

    );

}

export default TodosList;

