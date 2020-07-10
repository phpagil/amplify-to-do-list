import React, { useReducer, useCallback } from 'react';
import TasksContext from './tasksContext';
import TasksReducer from './tasksReducer';
import * as api from '../../graphql/api';
import {
    SET_ARRTASKS,
    EDIT_TASK,
    INIT_ARRTASKS,
    REMOVE_TASK,
    ADD_TASK,
    SET_ERR,
}
    from '../types';

const TasksState = props => {
    const initialState = {
        /*** ARRAY TASKS ***/
        arrTasks: [],
        err: null,
    }
    const [state, dispatch] = useReducer(TasksReducer, initialState);

    const initArrTasks = useCallback(() => {

        const initArr = async () => {
            try {
                const arr = await api.getTasks();
                dispatch({
                    type: INIT_ARRTASKS,
                    arrTasks: arr,
                });
            } catch (error) {
                dispatch({
                    type: SET_ERR,
                    err: "There has been an error. Please try again.",
                })
            }
        }
        initArr();

    }, []);

    const editTask = async (task) => {

        try {
            const editedTask = await api.updateTask(task);
            console.log(editedTask);
            const index = state.arrTasks.findIndex(currTask => currTask.id === task.id);
            console.log(index);
            dispatch({
                type: EDIT_TASK,
                arrTasks: [...state.arrTasks.slice(0, index), editedTask, ...state.arrTasks.slice(index + 1)],
            });
        } catch (error) {
            dispatch({
                type: SET_ERR,
                err: "There has been an error. Please try again.",
            })
        }
    }

    const setArrTasks = (arrTasks) => dispatch({
        type: SET_ARRTASKS,
        arrTasks: arrTasks
    });

    const removeTask = async (id) => {
        try {
            const deletedTaskID = await api.deleteTask(id);

            dispatch({
                type: REMOVE_TASK,
                arrTasks: state.arrTasks.filter(task => task.id !== deletedTaskID),
            });
        } catch (error) {
            dispatch({
                type: SET_ERR,
                err: "There has been an error. Please try again.",
            })
        }
    }
    const addTask = async (task) => {
        try {
            const newTask = await api.addTask(task);

            dispatch({
                type: ADD_TASK,
                arrTasks: [...state.arrTasks, { ...newTask }],
            });
        } catch (error) {
            dispatch({
                type: SET_ERR,
                err: "There has been a database error. Please try again.",
            })
        }
    }

    return (
        <TasksContext.Provider
            value={{
                arrTasks: state.arrTasks,
                setArrTasks,
                editTask,
                initArrTasks,
                removeTask,
                addTask,
                err: state.err,
            }}
        >
            {props.children}
        </TasksContext.Provider>
    );
}

export default TasksState;

