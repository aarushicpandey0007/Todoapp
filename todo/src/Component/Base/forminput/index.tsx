import React, { useState } from 'react';

interface FormInputProps {
  addTodo: (todo: string, priority: string) => void;
}

const FormInput: React.FC<FormInputProps> = ({ addTodo }) => {
  const [todo, setTodo] = useState("");
  const [priority, setPriority] = useState("low");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (todo.length > 0) {
      addTodo(todo, priority);
      setTodo(""); 
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
        <div className="priority-buttons">
          <button
            type="button"
            className={`button-high ${priority === "high" ? "active" : ""}`}
            onClick={() => setPriority("high")}
          >
            High
          </button>
          <button
            type="button"
            className={`button-medium ${priority === "medium" ? "active" : ""}`}
            onClick={() => setPriority("medium")}
          >
            Medium
          </button>
          <button
            type="button"
            className={`button-low ${priority === "low" ? "active" : ""}`}
            onClick={() => setPriority("low")}
          >
            Low
          </button>
        </div>
        <button type="submit" className="button">
          Add Todo
        </button>
      </div>
    </form>
  );
};



export default FormInput;
