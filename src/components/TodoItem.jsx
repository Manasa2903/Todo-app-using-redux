import { connect } from "react-redux";
import { useState } from "react";
import { deleteTodo, updateTodo } from "../redux";

const TodoItem = ({ ownProps, updateTodo, deleteTodo }) => {
  const { todo, inputTodo, setInputTodo, isEdit, setIsEdit } = ownProps;

  return (
    <div>
      <p>{todo.title}</p>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      {isEdit.edit ? (
        <button
          onClick={() => {
            updateTodo(todo.id, inputTodo);
            setIsEdit({ ...isEdit, edit: false });
          }}
        >
          Update
        </button>
      ) : (
        <button
          onClick={() => {
            setInputTodo(todo.title);
            setIsEdit({ id: todo.id, edit: true });
          }}
          disabled={todo.id === isEdit.id}
        >
          Edit
        </button>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteTodo: (id) => dispatch(deleteTodo(id)),
  updateTodo: (id, inputTodo) => dispatch(updateTodo(id, inputTodo)),
  ownProps: ownProps,
});

export default connect(null, mapDispatchToProps)(TodoItem);
