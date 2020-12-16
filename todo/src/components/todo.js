import React, { useReducer } from 'react';

const Todo = () => {
    const initialState = {
        name: "Example 1",
        listOf: []
    }

    return (
        <div>
            <div>
                <h1>Todo Tracker</h1>
            </div>
            <div>
                <input placeholder="type in todo here"></input>
            </div>
            <br></br>
            <div>
                <button>Add to List</button>
                <button>Delete from List</button>
            </div>
        </div>
    )
}

export default Todo