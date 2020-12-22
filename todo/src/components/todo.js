import React, { useState, useReducer } from 'react';
import { reducer, initialState } from '../reducers/todoReducer'
import { setTask, addTask, deleteTask } from '../actions/todoActions'

let currentState = reducer(initialState, setTask("Updated current State 2"));
console.log(currentState)
currentState = reducer(currentState, addTask())

const Todo = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    // const [task, setTask] = useState("First Task State")
    // const [memory, setMemory] = useState('')

    const handleChanges = e => {
        dispatch(setTask(e.target.value))
    }

    console.log(state)
    return (
        <div>
            <div>
                <h1>Todo Tracker</h1>
            </div>
            <div>
                <input type="text"
                    placeholder="type in todo here"
                    name="newTask"
                    value={state.task}
                    onChange={handleChanges}
                ></input>
            </div>
            <br></br>
            <div>
                <button
                    onClick={() => {
                        dispatch(addTask(state.addTask))
                    }}
                >Add to List</button>
                <button
                    onClick={() => {
                        dispatch(deleteTask(state.deleteTask))
                    }}
                >Delete from List</button>
            </div>
        </div>
    )
}

export default Todo