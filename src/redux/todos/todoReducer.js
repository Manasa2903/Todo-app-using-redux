import { DELETE_TODO, ADD_TODO, UPDATE_TODO } from "./todoTypes";

const initialState = {
    todoList: [],
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {...state, todoList: [...state.todoList, action.payload] };
        case DELETE_TODO:
            return {
                todoList: state.todoList.filter((todo) => todo.id !== action.payload),
            };
        case UPDATE_TODO:
            return {
                todoList: state.todoList.map((todo) => {
                    if (todo.id === action.payload.id) {
                        todo = action.payload;
                    }
                    console.log(todo);
                    return todo;
                }),
            };

        default:
            return state;
    }
};

export default todoReducer;