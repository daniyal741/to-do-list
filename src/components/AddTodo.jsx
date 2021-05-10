import React, { useState } from 'react';

function AddTodo(props) {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {

        e.preventDefault();
        if (!title || !desc) {
            alert("Please Fill the Form to Continue");
        }
        else {

            props.addTodo(title, desc);
            setTitle('');
            setDesc('');
        }
    }
    return (
        <div>
            <h1>Add Todo</h1>
            <form onSubmit={submit}>
                <div class="mb-3">
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
                </div>
                <div class="mb-3">
                    <input type="text" value={desc} onChange={(e) => (setDesc(e.target.value))} placeholder="Description" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Submit</button>
            </form>
            <hr />
        </div>
    );
}

export default AddTodo;