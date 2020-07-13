import { SET_ARRTASKS, EDIT_TASK, INIT_ARRTASKS, REMOVE_TASK, ADD_TASK, SET_ERR } from '../types';

export default (state, action) => {
    switch (action.type) {
        case SET_ARRTASKS:
            return {
                ...state,
                arrTasks: action.payload.arrTasks,
            }
        case EDIT_TASK:
            return {
                ...state,
                arrTasks: [...state.arrTasks.slice(0, action.payload.index), action.payload.editedTask, ...state.arrTasks.slice(action.payload.index + 1)],
            }
        case INIT_ARRTASKS:
            return {
                ...state,
                arrTasks: action.payload.arr,
            }
        case REMOVE_TASK:
            return {
                ...state,
                arrTasks: state.arrTasks.filter(task => task.id !== action.payload.deletedTaskID),
            }
        case ADD_TASK:
            return {
                ...state,
                arrTasks: [...state.arrTasks, { ...action.payload.newTask }],
            }
        case SET_ERR:
            return {
                ...state,
                err: action.payload.error,
            }
        default: return state;
    }
}