import { createStore } from "redux";
import todoReducer from "./redux/todos/todoReducer";

export const store = createStore(todoReducer);