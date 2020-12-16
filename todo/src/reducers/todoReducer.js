import { SET_TASK, ADD_TASK_TO_MEMORY, DELETE_TASK_FROM_MEMORY, CLEAR_TASK_INPUT } from '../actions/todoActions'

const reducer = (state, action) => {
    switch (action.type) {
        case SET_TASK:
            return ({ ...state, name: action.payload })
        case ADD_TASK_TO_MEMORY:
            return ({ ...state, memory: state.name })
        case DELETE_TASK_FROM_MEMORY:
            return ({ ...state, memory: state.name - action.payload })
        case CLEAR_TASK_INPUT:
            return ({ ...state, name: state })
        default:
            return state;
    }
}
export default reducer