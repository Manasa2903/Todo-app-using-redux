import { DELETE_TODO, ADD_TODO, UPDATE_TODO } from "./todoTypes";

export const deleteTodo = (id) => {
    return { type: DELETE_TODO, payload: id };
};

export const addTodo = (newTodo) => {
    return { type: ADD_TODO, payload: newTodo };
};

export const updateTodo = (todo) => {
    return { type: UPDATE_TODO, payload: todo };
};

export const changeTodoStatus = (todo) => {
    return { type: UPDATE_TODO, payload: todo };
};