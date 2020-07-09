
import React from 'react';
import { withAuthenticator } from 'aws-amplify-react';
import ToDoList from './ToDoList';
import theme from './theme';



function App() {
  return <ToDoList />;
}

export default withAuthenticator(App, true, [], null, theme);
