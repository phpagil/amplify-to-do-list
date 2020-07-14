# Simple To Do App
This app allows a user to manage a list of tasks to complete.

It includes a sign in, sign up page so that each user can have his/her own to do list.


## Link
* [A Simple React Hooks To Do App](https://aws-to-do-list.netlify.app/)
* You can use the following credentials to sign in: 
  * Username: demo123 
  * Password: password

## Purpose of project
* This is a simple app for me to practice new skills: 
  * Using React Hooks, and useContext for state management.
  * Using AWS Cognito for user Management.
  * Using GraphQL with DynamoDB.
* Also practised unit testing in React with Jest.

## User flows

### Adding a task

* A user can add a task by filling in the input box and clicking the add button.
* An error message box appears if the user enters an empty string and clicks the add button.

### Editing a task

* A user can edit an existing task by clicking the pencil icon and editing to input box before clicking the save button.
* An error message box appears if the user enters an empty string and clicks the save button.

### Checking off a task

* A user can click on an existing task to mark it as completed.
* The description of the task will be striked out.


### Deleting a task
* A user can click the trash can button to delete a task.

## Screenshots
<table>
  <tr>
    <td>Sign In </td>
     <td>Sign Up </td>
     <td>Sign Out </td>
  </tr>
  <tr>
    <td><img src="/public/images/user-stories/login.png" width=250></td>
    <td><img src="/public/images/user-stories/signup.png" width=250></td>
    <td><img src="/public/images/user-stories/logout.png" width=250></td>
  </tr>
    <tr>
    <td>App Interface </td>
     <td>Edit To Do </td>
     <td>Error Alert </td>
  </tr>
  <tr>
    <td><img src="/public/images/user-stories/app-interface.png" width=250></td>
    <td><img src="/public/images/user-stories/edit.png" width=250></td>
    <td><img src="/public/images/user-stories/error.png" width=250></td>
  </tr>
 </table>

## Technology

* [ReactJS with React Hooks](https://reactjs.org/) - A JavaScript library for building user interfaces.
* [GraphQL](https://graphql.org/) - A query language for your API.
* [AWS Amplify](https://aws.amazon.com/amplify/) - Fastest, easiest way to develop mobile and web apps that scale.
* [AWS Cognito](https://aws.amazon.com/cognito/) - Simple and Secure User Sign-Up, Sign-In, and Access Control.
* [AWS DynamoDB](https://aws.amazon.com/dynamodb/) - A Serverless Database that Automatically Scales and Continuously Backs Up Your Data.
* [Jest](https://jestjs.io/) - Delightful Javascript Testing
* [Netlify](https://www.netlify.com/) - The fastest way to build the fastest sites.


## Authors

* **Azlina Yeo** - *Initial work* - [nax2uk](https://github.com/nax2uk)

## License

[MIT](LICENSE)
