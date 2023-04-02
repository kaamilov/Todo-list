import React from "react";
import { ITodo } from "../../type/data";

interface ITodoItem extends ITodo {
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}
const TodoItem: React.FC<ITodoItem> = (props) => {
  const { id, title, complated, toggleTodo, removeTodo } = props;
  return (
    <div>
      <input
        type="checkbox"
        checked={complated}
        onChange={() => toggleTodo(id)}
      />
      <span style={{ display: "inline-block", margin: "0 10px" }}>{title}</span>
      <button
        onClick={() => removeTodo(id)}
        style={{ background: "transparent", color: "red", border: "none" }}
      >
        X
      </button>
    </div>
  );
};

export default TodoItem;
