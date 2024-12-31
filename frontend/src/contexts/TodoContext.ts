import { createContext, useContext } from "react";
import Todo, { TodoContent } from "../types/Todo";

interface TodoContextType {
  todos: Todo[];
  getTodo: (id: string) => Todo;
  addTodo: (todo: TodoContent) => Promise<void>;
  editTodo: (id: string, updatedTodo: Todo) => Promise<void>;
  removeTodo: (id: string) => Promise<void>;
  loading: boolean;
}

export const TodoContext = createContext<TodoContextType>(
  {} as TodoContextType
);

export const useTodoContext = () => useContext(TodoContext);
