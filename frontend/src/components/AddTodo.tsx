import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import { useTodoContext } from "../contexts/TodoContext";
import { TodoContent } from "../types/Todo";

const AddTodo: React.FC = () => {
  const [todo, setTodo] = useState<TodoContent>({ title: "", description: "" });
  const { addTodo } = useTodoContext();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTodo(todo).then(() => {
      setTodo({ title: "", description: "" });
    });
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        Add Todo
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Todo"
          name="title"
          variant="outlined"
          fullWidth
          required
          margin="normal"
          value={todo.title}
          onChange={handleChange}
        />
        <TextField
          label="Description"
          variant="outlined"
          name="description"
          fullWidth
          multiline
          rows={4}
          margin="normal"
          value={todo.description}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Add
        </Button>
      </form>
    </Container>
  );
};

export default AddTodo;
