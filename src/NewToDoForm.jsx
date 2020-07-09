import React, { useState, useContext } from 'react';
import TasksContext from './context/tasks/tasksContext';
import './NewToDoForm.css'

const NewToDoForm = () => {
    /*** TASKS ***/
    const tasksContext = useContext(TasksContext);

    const [task, setTask] = useState("");

    const handleChangeTask = (e) => {
        setTask(e.target.value);
    }

    const handleAddToDo = async (e) => {
        e.preventDefault();
        tasksContext.addTask({ task, completed: false });
        setTask("");

    }
    return (
        <form className='NewTodoForm' onSubmit={handleAddToDo}>
            <label htmlFor="newTask">New To Do:</label>
            <input type="text" id="newTask" placeholder="Enter To Do" value={task} onChange={handleChangeTask} />
            <button>Add</button>
        </form>
    );
};

export default NewToDoForm;