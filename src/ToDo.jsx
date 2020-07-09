import React, { useState, useContext } from 'react';
import TasksContext from './context/tasks/tasksContext';
import './ToDo.css';


const Todo = ({ task }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [currTask, setCurrTask] = useState(task.task)
    const tasksContext = useContext(TasksContext);
    const handleChange = (e) => {
        setCurrTask(e.target.value);
    }
    const handleUpdate = (e) => {
        e.preventDefault();
        tasksContext.editTask({ id: task.id, task: currTask });
        setIsEditing(false);
    }
    const handleToggle = () => {
        tasksContext.editTask({ id: task.id, completed: !task.completed });
    }
    const handleRemove = () => {
        tasksContext.removeTask(task.id);
    }
    const toggleEditForm = () => {
        setIsEditing(!isEditing);
    }
    return (
        <div className={task.completed ? "Todo completed" : "Todo"}>
            {isEditing ?

                <form className='Todo-edit-form' onSubmit={handleUpdate}>
                    <input type="text" value={currTask} onChange={handleChange} />
                    <button>Save</button>
                </form >

                :
                <li className='Todo-task' onClick={handleToggle}>
                    {task.task}
                </li>
            }
            <div className='Todo-buttons'>
                <button onClick={toggleEditForm}>
                    <i className='fas fa-pen' />
                </button>
                <button onClick={handleRemove}>
                    <i className='fas fa-trash' />
                </button>
            </div>
        </div>
    );
};

export default Todo;