import { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux";
import TodoItem from "./TodoItem";

const TodoList = ({ todoList, addTodo }) => {
  const [isEdit, setIsEdit] = useState({ id: null, edit: false });
  const [inputTodo, setInputTodo] = useState("");
  const [id, setId] = useState(1);

  const newTodo = {
    title: inputTodo,
    id,
  };

  console.log(todoList);
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Title"
        value={inputTodo}
        onChange={(e) => setInputTodo(e.target.value)}
      />
      <button
        type="button"
        onClick={() => {
          addTodo(newTodo);
          setId((prevState) => prevState + 1);
          setInputTodo("");
        }}
      >
        Add
      </button>
      {todoList &&
        todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            inputTodo={inputTodo}
            setInputTodo={setInputTodo}
            isEdit={isEdit}
            setIsEdit={setIsEdit}
          />
        ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todoList: state.todoList,
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (newTodo) => dispatch(addTodo(newTodo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
