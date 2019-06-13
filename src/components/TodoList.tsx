import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { todoListSelector } from "../selectors/todoSelector";
import todosModules from "../modules/todosModule";
interface TodoListProps {}
const TodoList: React.FC<TodoListProps> = props => {
  const dispatch = useDispatch();
  const todos = useSelector(todoListSelector);

  const toggleTodo = (id: number) => {
    dispatch(todosModules.actions.toggleTodo(id));
  };

  return (
    <ul>
      {todos.map(todo => (
        <li
          key={todo.id}
          onClick={() => {
            toggleTodo(todo.id);
          }}
          style={{
            textDecoration: `${todo.completed ? "line-through" : "none"}`
          }}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
