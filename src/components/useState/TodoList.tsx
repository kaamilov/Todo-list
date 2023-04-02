import React from "react";
import { ITodo } from "../../type/data";
import TodoItem from "./TodoItem";

interface TodoListProps {
  items: ITodo[];
  removeTodo: (id:number) => void;
  toggleTodo: (id:number) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  const { items, removeTodo, toggleTodo } = props;
  return (
    <div>
      {items.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
