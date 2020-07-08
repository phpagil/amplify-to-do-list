import React, { useState, useEffect } from 'react';
import { withAuthenticator } from 'aws-amplify-react';
import * as api from './graphql/api';
import theme from './theme';

function App() {
  const [arrTasks, setArrTasks] = useState([]);
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState(0);

  /* HANDLE FUNCTIONS */
  const handleCheck = async (value, id) => {
    try {
      const updatedTask = await api.updateTask({ id, isChecked: value });
      const index = arrTasks.findIndex(task => task.id === id);
      setArrTasks([...arrTasks.slice(0, index), updatedTask, ...arrTasks.slice(index + 1)]);
    } catch (error) {
      console.log(error);
    }
  }

  const handleChangeTask = (e) => {
    setTask(e.target.value);
  }

  const handleChangePriority = (e) => {
    setPriority(e.target.value);
  }

  const handleAddToDo = async (e) => {
    e.preventDefault();
    try {
      const newTask = await api.addTask({ task, priority, isChecked: false });
      setArrTasks([{ ...newTask }, ...arrTasks]);
      setTask("");
      setPriority(0);
    } catch (error) {
      console.log(error);
    }

  }

  const handleDelete = async (id) => {
    try {
      const deletedTaskID = await api.deleteTask(id);
      setArrTasks(arrTasks.filter(task => task.id !== deletedTaskID));
    } catch (error) {
      console.log(error);
    }

  }
  useEffect(async () => {
    try {
      const arr = await api.getTasks()
      setArrTasks(arr);
    } catch (error) {
      console.log(error);
    }

  }, []);

  /** Calculate today's date to show */
  let today = new Date();
  let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  }
  let day = today.toLocaleDateString('en-us', options);

  return (
    <div className="App">
      <div class="box" id="heading">
        <h1>{day}</h1>
      </div>
      <div class="box">
        <div class="btn-group">
          <button id="sortByTask">Alphabetical Order</button>
          <button id="sortByPriority">Highest Priority</button>
        </div>

        <dl id="listTasks">
          {
            arrTasks.map(elem => {
              return (<div className="task" key={elem.id}>
                <input type="checkbox" onClick={e => handleCheck(e.target.checked, elem.id)} checked={elem.isChecked} />
                <dt>{elem.task}</dt>
                <button className="delete" onClick={() => { handleDelete(elem.id) }}><span>&times;</span></button>
                <dd>Priority: {elem.priority}</dd>
              </div>
              )
            })
          }
        </dl>

      </div>
      <div class="box">
        <h3>Add Task</h3>
        <table>
          <tr>
            <td class="lbl"><label
              htmlFor="newTask">Task:</label></td>
            <td colspan="2"><input type="text" id="task" placeholder="New item" value={task} onChange={handleChangeTask} /></td>
          </tr>
          <tr>
            <td class="lbl"><label htmlFor="optPriority">Priority:</label></td>
            <td colspan="2">
              <select id="newPriority" name="optPriority" onChange={handleChangePriority} value={priority}>
                <option value=""></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </td>
          </tr>
          <tr>
            <td colspan="3" class="btn-add"><button id="addTask" class="btn-round" onClick={handleAddToDo}>+</button></td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default withAuthenticator(App, true, [], null, theme);
