import { SET_ARRTASKS, EDIT_TASK, INIT_ARRTASKS, REMOVE_TASK, ADD_TASK } from '../types';

export default (state, action) => {
    switch (action.type) {
        case SET_ARRTASKS:
            return {
                ...state,
                arrTasks: action.arrTasks,
            }
        case EDIT_TASK:
            return {
                ...state,
                arrTasks: action.arrTasks,
            }
        case INIT_ARRTASKS:
            return {
                ...state,
                arrTasks: action.arrTasks,
            }
        case REMOVE_TASK:
            return {
                ...state,
                arrTasks: action.arrTasks,
            }
        case ADD_TASK:
            return {
                ...state,
                arrTasks: action.arrTasks,
            }
        default: return state;
    }
}