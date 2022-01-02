import "./App.css";
import TodoList from "./components/TodoList";
import { Provider } from "react-redux";
import { store } from "../src/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <TodoList />
      </Provider>
    </div>
  );
}

export default App;
