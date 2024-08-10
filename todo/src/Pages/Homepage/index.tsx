// src/index.tsx


import FormInput from '../../Component/Base/forminput';
import { todoStore } from '../../State/TodoStore';


function Index() {
  const todos = todoStore((state) => state.todos);
  const todoState = todoStore();

  const randomId = (): number => {
    const min = 1000;
    const max = 9999;
    return Math.round(Math.random() * (max - min) + 1) + min;
  };

  const addTodo = (todo: string) => {
    todoState.addTodo({
      id: randomId(),
      todo,
      isDone: false,
    });
  };

  return (
    <div className="container">
      <div className="content">
        <h1 className="title">TODO APP</h1>
        <p className="description">Add your daily task</p>
        <FormInput addTodo={addTodo} />
        <div className="todo-list">
          {todos.map((t) => (
            <div key={t.id} className="todo-item">
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
      </div>
    </div>
  );
}

export default Index;



