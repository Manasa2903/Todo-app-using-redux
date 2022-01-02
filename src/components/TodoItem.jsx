import { connect } from "react-redux";
import { deleteTodo, updateTodo, changeTodoStatus } from "../redux";

const TodoItem = ({ ownProps, updateTodo, deleteTodo, changeTodoStatus }) => {
  const { todo, inputTodo, setInputTodo, editId, setEditId } = ownProps;
  const todoClass = todo.isComplete
    ? "text-decoration-line-through"
    : "text-decoration-line-none";

  return (
    <div className="mt-3">
      <input
        type="checkbox"
        id={`checkbox-${todo.id}`}
        onChange={(e) => {
          changeTodoStatus({ ...todo, isComplete: e.target.checked });
        }}
      />
      <label
        htmlFor={`checkbox-${todo.id}`}
        className={`${todoClass} me-5 title-name ms-2`}
      >
        {todo.title}
      </label>
      <button onClick={() => deleteTodo(todo.id)} className="me-3">
        Delete
      </button>
      {editId === todo.id ? (
        <button
          onClick={() => {
            updateTodo({ ...todo, title: inputTodo });
            setEditId(null);
            setInputTodo("");
          }}
        >
          Update
        </button>
      ) : (
        <button
          onClick={() => {
            setInputTodo(todo.title);
            setEditId(todo.id);
          }}
          disabled={editId}
        >
          Edit
        </button>
      )}
    </div>
  );
};

// const mapStateToProps = (state, ownProps) => ({
//   ownProps
// });

const mapDispatchToProps = (dispatch, ownProps) => ({
  deleteTodo: (id) => dispatch(deleteTodo(id)),
  updateTodo: (id, inputTodo) => dispatch(updateTodo(id, inputTodo)),
  changeTodoStatus: (id, isComplete) =>
    dispatch(changeTodoStatus(id, isComplete)),
  ownProps,
});

export default connect(null, mapDispatchToProps)(TodoItem);
