import { useCallback, useEffect, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { ReactNode } from "react";
import Todo, { TodoContent } from "../types/Todo";

const baseUrl = "http://localhost:3000";
export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getTodos();
  }, []);

  const getTodos = async () => {
    setLoading(true);
    fetch(baseUrl + "/api/tasks")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return response.json().then((error) => {
            throw new Error(error.message);
          });
        }
      })
      .then((data) => {
        setTodos(data);
      })
      .catch((error) => {
        alert(`Failed to fetch todos: ${error.message}`);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const addTodo = async (todoContent: TodoContent) => {
    setLoading(true);
    fetch(baseUrl + "/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todoContent),
    })
      .then(async (response) => {
        if (response.ok) {
          return response.json();
        } else {
          const error = await response.json();
          throw new Error(error.message);
        }
      })
      .then((savedTodo) => {
        setTodos([...todos, savedTodo]);
      })
      .catch((error) => {
        alert(`Failed to add todo: ${error.message}`);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const getTodo = useCallback(
    (id: string) => {
      return todos.find((todo) => todo._id === id) as Todo;
    },
    [todos]
  );
  const editTodo = async (id: string, updatedTodo: Todo) => {
    setLoading(true);
    fetch(baseUrl + `/api/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTodo),
    })
      .then((response) => {
        if (response.ok) {
          setTodos(todos.map((todo) => (todo._id === id ? updatedTodo : todo)));
        } else {
          return response.json().then((error) => {
            throw new Error(error.message);
          });
        }
      })
      .catch((error) => {
        alert(`Failed to save todo: ${error.message}`);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  const removeTodo = async (id: string) => {
    setLoading(true);
    fetch(baseUrl + `/api/tasks/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setTodos(todos.filter((todo) => todo._id !== id));
        } else {
          return response.json().then((error) => {
            throw new Error(error.message);
          });
        }
      })
      .catch((error) => {
        alert(`Failed to delete todo: ${error.message}`);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, editTodo, removeTodo, getTodo, loading }}
    >
      {children}
    </TodoContext.Provider>
  );
};
