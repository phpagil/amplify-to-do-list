# Simple To Do App
This app allows a user to manage a list of tasks to complete.

It includes a login in page so that each user can have his/her own to do list.

## User flows

### Adding a task

1. A user can add a task by filling in the input box and clicking the add button.
[<img src="/public/images/user-stories/login.png" width="250"/>](image.png)
1. An error message box appears if the user enters an empty string and clicking the add button.

### Editing a task

1. A user can edit an existing task by clicking the pencil icon and editing to input box before clicking the save button.
1. An error message box appears if the user enters an empty string and clicking the save button.

### Checking off a task

1. A user can click on an existing task to mark it as completed.
1. The description of the task will be striked out.


### Deleting a task

1. A user can click the trash can button to delete a task.

## Previews
<table>
  <tr>
    <tdUser can log in</td>
     <td>User can sign up</td>
     <td>User can log out</td>
  </tr>
  <tr>
    <td><img src="/public/images/user-stories/login.png" width=250></td>
    <td><img src="/public/images/user-stories/signup.png" width=250></td>
    <td><img src="/images/user-stories/logout.png" width=250></td>
  </tr>
 </table>
![User sign in](/public/images/user-stories/login.png =350px)
![User can add tasks](/public/images/user-stories/add.jpg)| ![User can edit task](/images/user-stories/edit.jpg) |
![User can check-off tasks](/images/user-stories/check-off.jpg)| ![User can delete tasks](/images/user-stories/delete.jpg |
![User can login](/public/images/user-stories/login.png)| ![User can sign up](/public/images/user-stories/signup.png) | 
![User can log out](/images/user-stories/logout.jpg)  

## Technology

The app is currently hosted on [netlify](https://www.netlify.com/), and connects to a [AWS DynamoDB](https://aws.amazon.com/dynamodb/) database. 

The app uses [GraphQL](https://graphql.org/)for fulfilling queries with the existing [DynamoDB](https://aws.amazon.com/dynamodb/) database.

The app uses ReactJS hooks for the front-end.


## License

[MIT](LICENSE)
