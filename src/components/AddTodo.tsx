import React, { useState } from "react";
import { useDispatch } from "react-redux";
import todosModules from "../modules/todosModule";
interface AddTodoProps {}
const AddTodo: React.FC<AddTodoProps> = props => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const addTodo = (e: React.FormEvent<HTMLButtonElement>) => {
    if (input !== "") {
      e.preventDefault();
      dispatch(todosModules.actions.addTodo(input));
      setInput("");
    }
  };

  return (
    <form>
      <input
        type="text"
        onChange={e => {
          setInput(e.target.value);
        }}
        value={input}
      />
      <button type="submit" onClick={addTodo}>
        add
      </button>
    </form>
  );
};

export default AddTodo;
