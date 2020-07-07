import React, { useState } from 'react';

import { withAuthenticator, AmplifyTheme } from 'aws-amplify-react';

function App() {
  const [arrItems, setArrItems] = useState([{ id: 1, description: "sleep", priority: 1, isChecked: false }]);
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
          {arrItems.map(elem => {
            return (<>
              <dt class={elem.isChecked && "completed"} key={elem.id} >{elem.description}</dt>
              <dd>Priority: {elem.priority}</dd>
            </>
            )
          })}
        </dl>

      </div>
      <div class="box">
        <h3>Add Task</h3>
        <table>
          <tr>
            <td class="lbl"><label for="newTask">Task:</label></td>
            <td colspan="2"><input type="text" id="newTask" placeholder="New item" /></td>
          </tr>
          <tr>
            <td class="lbl"><label for="optPriority">Priority:</label></td>
            <td colspan="2">
              <select id="newPriority" name="optPriority">
                <option value=""></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </td>
          </tr>
          <tr>
            <td colspan="3" class="btn-add"><button id="addTask" class="btn-round">+</button></td>
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
    margin: "0",
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
  inputLabel: {
    ...AmplifyTheme.inputLabel,
    marginTop: "10px",
    marginBottom: "5px",
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
