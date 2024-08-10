import React from 'react';
import { todoStore } from '../../../State/TodoStore';


const TodoList: React.FC = () => {
  const todos = todoStore((state) => state.todos);
  const todoState = todoStore();

  const getPriorityStyle = (priority: string) => {
    switch (priority) {
      case "high":
        return { backgroundColor: " #FFA07A" }; 
      case "medium":
        return { backgroundColor: "#FADA5E" }; 
      case "low":
      default:
        return { backgroundColor: "#3F704D" }; 
    }
  };

  return (
    <div className="todo-list">
      {todos.map((t) => (
        <div key={t.id} className="todo-item" style={getPriorityStyle(t.priority)}>
          <span>{t.todo}</span>
          <button
            className="remove-button"
            onClick={() => todoState.removeTodo(t.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;

