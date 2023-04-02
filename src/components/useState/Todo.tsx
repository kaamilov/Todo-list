import React, { useEffect, useRef, useState } from "react";
import { ITodo } from "../../type/data";
import TodoList from "./TodoList";
const Todo: React.FC = () => {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState<ITodo[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const addTodo = () => {
    if (value) {
      setTodos([
        ...todos,
        {
          id: Math.random(),
          title: value,
          complated: false,
        },
      ]);
      setValue("");
    }
  };
  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const removeTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          complated: !todo.complated,
        };
      })
    );
  };
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        ref={inputRef}
      />
      <button onClick={addTodo}>add</button>
      <TodoList removeTodo={removeTodo} toggleTodo={toggleTodo} items={todos} />
    </div>
  );
};

export default Todo;
