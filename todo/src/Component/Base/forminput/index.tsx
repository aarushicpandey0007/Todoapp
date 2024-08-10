// src/components/Base/FormInput/index.tsx
import React, { useState } from 'react';

interface FormInputProps {
  addTodo: (todo: string) => void;
}

const FormInput: React.FC<FormInputProps> = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (todo.length > 0) {
      addTodo(todo);
      setTodo(""); // Clear the input after submission
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form">
        <input
          type="text"
          className="input"
          placeholder="Enter your todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit" className="button">
          Add Todo
        </button>
      </div>
    </form>
  );
};

export default FormInput;
