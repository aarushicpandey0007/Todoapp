import { create } from "zustand";

export type TodoType = {
  id: number;
  todo: string;
  isDone: boolean;
};

type States = {
  todos: Array<TodoType> | [];
};

type Actions = {
  addTodo: (todo: TodoType) => void;
  removeTodo: (id: number) => void; // Add removeTodo to Actions
};

export const todoStore = create<States & Actions>((set) => ({
  todos: [],
  addTodo: (todo: TodoType) =>
    set((state) => ({
      todos: [todo, ...state.todos],
    })),
  removeTodo: (id: number) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id), // Logic to remove a todo
    })),
}));
