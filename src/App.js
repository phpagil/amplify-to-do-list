import React, { useState, useEffect } from 'react';
import { API, graphqlOperation } from 'aws-amplify'
import { withAuthenticator, AmplifyTheme } from 'aws-amplify-react';
import { createTodo } from './graphql/mutations';
import { listTodos } from './graphql/queries';

function App() {
  const [arrTasks, setArrTasks] = useState([]);
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  const getTasks = async () => {
    try {
      const result = await API.graphql(graphqlOperation(listTodos));
      setArrTasks(result.data.listTodos.items)
      console.log(result);
    } catch (error) {

    }

  }
  useEffect(() => {
    getTasks();



  }, []);



  const handleChangeTask = (e) => {
    setTask(e.target.value);
  }

  const handleChangePriority = (e) => {
    setPriority(e.target.value);
  }

  const handleAddToDo = async (e) => {
    e.preventDefault();
    //setArrItems([{ task, priority }, ...arrItems]);
    try {
      const result = await API.graphql(graphqlOperation(createTodo, { input: { task, priority, isChecked } }))
      setTask("");
      setPriority(0);
      setArrTasks([{ task, priority, isChecked }, ...arrTasks]);

    } catch (error) {

    }

  }
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
              return (<>
                <dt class={elem.isChecked && "completed"} key={elem.id} >{elem.task}</dt>
                <dd>Priority: {elem.priority}</dd>
              </>
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

const theme = {
  ...AmplifyTheme,
  formContainer: {
    ...AmplifyTheme.formContainer,
    margin: "0",
    width: "100%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  sectionHeader: {
    ...AmplifyTheme.sectionHeader,
    backgroundColor: "#2a8a92",
    fontSize: "1.1em"

  },
  input: {
    ...AmplifyTheme.input,
    marginTop: "3px"

  },
  inputLabel: {
    ...AmplifyTheme.inputLabel,
    marginTop: "10px",
    marginBottom: "2px",
    fontSize: "0.9em"
  },
  hint: {
    ...AmplifyTheme.hint,
    marginTop: "10px",
    marginLeft: "5px",
    fontSize: "0.8em"
  },
  sectionFooterSecondaryContent: {
    ...AmplifyTheme.sectionFooterSecondaryContent,
    margin: "10px",
    fontSize: "0.8em"
  },
  button: {
    ...AmplifyTheme.button,
    marginLeft: "5px",
    backgroundColor: "#68b8c1",
    color: "white",
    fontSize: "0.9em"
  },
  navButton: {
    ...AmplifyTheme.navButton,
    backgroundColor: "#68b8c1",
    padding: "10px",
    fontWeight: "bold",
    color: "white",
    margin: "0",
  },
  navBar: {
    ...AmplifyTheme.navBar,
    backgroundColor: "#fff",
  },
  navRight: {
    ...AmplifyTheme.navRight,
    margin: "0 8px"
  },
  navItem: {
    ...AmplifyTheme.navItem,
    padding: "10px"
  },

}
export default withAuthenticator(App, true, [], null, theme);
