import React, { useState, useContext } from 'react';
import TasksContext from './context/tasks/tasksContext';
import './ToDo.css';


const Todo = ({ task }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [currTask, setCurrTask] = useState(task.task);
    const [err, setErr] = useState("");
    const tasksContext = useContext(TasksContext);
    const handleChange = (e) => {
        setCurrTask(e.target.value);
    }
    const handleUpdate = (e) => {
        e.preventDefault();
        if (currTask.trim() === "") {
            setErr("Please add a description for your updated task!");
        }
        else {
            tasksContext.editTask({ id: task.id, task: currTask });
            setIsEditing(false);
        }

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

    const handleCloseAlert = (e) => {
        e.preventDefault();
        setErr("");
    }
    return (
        <>
            <div className={task.completed ? "Todo completed" : "Todo"}>
                {isEditing ?
                    <>
                        <form className='Todo-edit-form' onSubmit={handleUpdate}>
                            <input type="text" value={currTask} onChange={handleChange} />
                            <button>Save</button>
                        </form >

                    </>
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
            {(err !== "") &&
                <div className="alert">
                    <button className="closebtn" onClick={handleCloseAlert}>&times;</button>
                    <strong>Error! </strong> {err}
                </div>
            }
        </>
    );
};

export default Todo;