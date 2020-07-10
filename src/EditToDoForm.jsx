import React, { useState } from 'react';
import TasksContext from './context/tasks/tasksContext';

const EditToDoForm = ({ task }) => {

    const [currTask, setCurrTask] = useState(task.task);

    const handleChange = (e) => {
        setCurrTask(e.target.value);
    }
    const handleUpdate = (e) => {
        e.preventDefault();
        tasksContext.editTask({ id: task.id, task: currTask });
        setIsEditing(false);
    }

    return (
        <form className='Todo-edit-form' onSubmit={handleUpdate}>
            <input type="text" value={currTask} onChange={handleChange} />
            <button>Save</button>
        </form >
    );
};

export default EditToDoForm;