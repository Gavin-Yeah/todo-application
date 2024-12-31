import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, TextField, Button, Typography } from "@mui/material";
import { useTodoContext } from "../contexts/TodoContext";
import Todo from "../types/Todo";
const EditTodo: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { editTodo, getTodo, loading } = useTodoContext();
  const [todo, setTodo] = useState<Todo>(getTodo(id as string));

  useEffect(() => {
    setTodo(getTodo(id as string));
  }, [getTodo, id]);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      // Update the todo item by id
      editTodo(id, todo).then(() => {
        navigate("/");
      });
    }
  };

  return (
    <Container maxWidth="sm">
      {loading && <p>loading...</p>}
      {!loading && !todo && <p>Not found</p>}
      {todo && (
        <>
          <Typography variant="h4" component="h1" gutterBottom>
            Edit Todo Item
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Title"
              name="title"
              value={todo.title}
              required
              onChange={handleInputChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Description"
              name="description"
              value={todo.description}
              onChange={handleInputChange}
              fullWidth
              margin="normal"
              multiline
              rows={4}
            />
            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </form>
        </>
      )}
    </Container>
  );
};

export default EditTodo;
