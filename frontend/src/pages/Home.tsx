import React from "react";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";

export default function Home() {
  return (
    <div>
      <AddTodo />
      <TodoList />
    </div>
  );
}
