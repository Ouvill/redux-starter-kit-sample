import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import counterModule from "./modules/counterModule";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const counter = useSelector(counterModule.selectors.getCounter);

  const increment = () => dispatch(counterModule.actions.increment());
  const decrement = () => dispatch(counterModule.actions.decrement());

  return (
    <div className="App">
      <p>{counter}</p>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <div>
        <AddTodo />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
