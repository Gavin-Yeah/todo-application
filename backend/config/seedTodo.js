const db = require("./connection");
const Todo = require("../models/Todo");

const seedTodos = async () => {
  try {
    // Delete existing todos in the database
    await Todo.deleteMany({});

    // Seed todos data
    const todosData = [
      {
        title: "Buy groceries",
        description: "Milk, Bread, Cheese, Eggs",
        completed: false,
        createdAt: new Date(),
      },
      {
        title: "Read a book",
        description: 'Finish reading "The Great Gatsby"',
        completed: false,
        createdAt: new Date(),
      },
      {
        title: "Workout",
        description: "Go for a 30-minute run",
        completed: true,
        createdAt: new Date(),
      },
    ];

    // Insert the todos data into the database
    await Todo.insertMany(todosData);

    console.log("Todos seeded successfully");
  } catch (error) {
    console.error("Error seeding Todos", error);
  } finally {
    await db.close();
  }
};

seedTodos();
