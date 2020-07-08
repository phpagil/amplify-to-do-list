import { API, graphqlOperation } from 'aws-amplify';
import { createTodo, updateTodo, deleteTodo } from './mutations';
import { listTodos } from './queries';
/** GRAPHQL  */
export const updateTask = async (task) => {

    const result = await API.graphql(graphqlOperation(updateTodo, { input: task }));
    return result.data.updateTodo;
}

export const addTask = async (newTask) => {
    const result = await API.graphql(graphqlOperation(createTodo, { input: newTask }))
    return result.data.createTodo;

}

export const deleteTask = async (id) => {
    const result = await API.graphql(graphqlOperation(deleteTodo, { input: { id: id } }));
    return result.data.deleteTodo.id;

}
export const getTasks = async () => {

    const result = await API.graphql(graphqlOperation(listTodos));
    return result.data.listTodos.items;
}