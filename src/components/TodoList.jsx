import { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux";
import TodoItem from "./TodoItem";

const TodoList = ({ todoList, addTodo }) => {
  const [editId, setEditId] = useState(null);
  const [inputTodo, setInputTodo] = useState("");
  const [id, setId] = useState(1);

  const newTodo = {
    title: inputTodo,
    id,
    isComplete: false,
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addTodo(newTodo);
        setId((prevState) => prevState + 1);
        setInputTodo("");
      }}
    >
      <input
        type="text"
        placeholder="Enter Title"
        value={inputTodo}
        onChange={(e) => setInputTodo(e.target.value)}
        required
      />
      <button type="submit" disabled={editId}>
        Add
      </button>
      {todoList &&
        todoList.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            inputTodo={inputTodo}
            setInputTodo={setInputTodo}
            editId={editId}
            setEditId={setEditId}
          />
        ))}
    </form>
  );
};

const mapStateToProps = (state) => ({
  todoList: state.todoList,
});

const mapDispatchToProps = (dispatch) => ({
  addTodo: (newTodo) => dispatch(addTodo(newTodo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
