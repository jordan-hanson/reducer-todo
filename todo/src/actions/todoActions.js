export const SET_TASK = "SET_TASK"
export const ADD_TASK_TO_MEMORY = "ADD_TASK_TO_MEMORY"
export const DELETE_TASK_FROM_MEMORY = "DELETE_TASK_FROM_MEMORY"
export const CLEAR_TASK_INPUT = "CLEAR_TASK_INPUT"

export const setTask = (task) => {
    return ({ type: SET_TASK, payload: task })
}
export const addTask = (task) => {
    return ({ type: ADD_TASK_TO_MEMORY })
}
export const deleteTask = (task) => {
    return ({ type: DELETE_TASK_FROM_MEMORY })
}
export const clear = (task) => {
    return ({ type: CLEAR_TASK_INPUT })
}
