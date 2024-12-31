import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Checkbox,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import Todo from "../types/Todo";
import { useTodoContext } from "../contexts/TodoContext";
import { useNavigate } from "react-router-dom";
const TodoList: React.FC = () => {
  const { todos, removeTodo, editTodo, loading } = useTodoContext();
  const navigate = useNavigate();
  const finished = todos.reduce(
    (acc, cur) => (cur.completed ? acc + 1 : acc),
    0
  );
  const handleEdit = (id: string) => {
    navigate("/todo/" + id);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <h2>
        Completed: {finished} / {todos.length}
      </h2>
      <List>
        {todos.map((todo: Todo) => (
          <ListItem
            key={todo._id}
            dense
            secondaryAction={
              <>
                <IconButton edge="end" onClick={() => handleEdit(todo._id)}>
                  <Edit />
                </IconButton>

                <IconButton
                  edge="end"
                  onClick={() => removeTodo && removeTodo(todo._id)}
                >
                  <Delete />
                </IconButton>
              </>
            }
          >
            <Checkbox
              edge="start"
              checked={todo.completed}
              tabIndex={-1}
              disableRipple
              onClick={() =>
                editTodo(todo._id, { ...todo, completed: !todo.completed })
              }
              inputProps={{ "aria-labelledby": todo._id }}
            />

            <ListItemText primary={todo.title} secondary={todo.description} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TodoList;
