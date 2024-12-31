const express = require("express");

const todoRouter = express.Router();
const {
  getTodoById,
  getTodos,
  updateTodo,
  deleteTodo,
  createTodo,
} = require("../controllers/todoController");

// Create a new todo
todoRouter.post("/", createTodo);

// Get all todos
todoRouter.get("/", getTodos);

// Get a single todo by ID
todoRouter.get("/:id", getTodoById);

// Update a todo by ID
todoRouter.put("/:id", updateTodo);

// Delete a todo by ID
todoRouter.delete("/:id", deleteTodo);

module.exports = todoRouter;
