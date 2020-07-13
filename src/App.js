
import React from 'react';
import { withAuthenticator } from 'aws-amplify-react';
import ToDoList from './components/ToDoList';
import theme from './utils/theme';


function App() {
  return <ToDoList />;
}

export default withAuthenticator(App, true, [], null, theme);
