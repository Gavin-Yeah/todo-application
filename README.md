# todo-application

## back end

### summary

1. use mongoDB and mongoose for database management
2. Use Express.js to create RESTful routes.
3. Use CORS middleware to allow frontend-backend communication.

### setup

1.  open cmd to the root of the project
2.  run `cd backend` to enter the backend folder
3.  create a file named `.env`

- assign mongoDB connection to MONGO_URI like `MONGO_URI=mongodb+srv://<db_username>:<db_password>@cluster0.nhzo9jj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
- assign a value to backend server port like `PORT=3000`, otherwise the default port number is 3000

4.  run `npm i` to install dependencies
5.  we can run `node ./config/seedTodo` to initialize mongodb database
6.  run `npm start` to start the server

### API Endpoints to perform CRUD operations:

- Base URL: /api/tasks
- POST / : Add a new task.
- GET / : Retrieve all tasks.
- PUT /:id : Update a task by ID.
- DELETE /:id : Delete a task by ID.

### structure

```
backend/
app.js  // set up express server and use cors
├── bin/
│ └── www  // entry file
├── package.json  //project metadata
├── config/
│ └── connection.js // mongoose setup file
│ └── seedTodo.js   // database initialization file
├── models/  database models with schemas
│ └── ...
├── routes/
│ └── todo.js  // todo routes, includes apis GET, POST, PUT, DELETE
├── controller/  all controllers
│ └── ...
├── types/  all reuseable interfaces/types
│ └── ...
├── node_modules/ //dependencies
│ └── ...
```

## front end

### summary

1. use vite for the frontend
2. use fetch to make API calls
3. use Context API for state management due to small scale
4. use React Router for navigation (Home and Todo edit pages)

### setup

1.  open cmd to the root of the project
2.  run `cd frontend` to enter the frontend folder
3.  run `npm i` to install dependencies
4.  run `npm run dev` to start the server
5.  open the browser and go to homepage `http://localhost:5173/`

### structure

```
frontend/
src/
├──App.tsx // root component
├──main.tsx //entry
├──pages/ //pages
│ └──Home.tsx
│ └──Edit.tsx
├── providers/ //context provider
│ └──TodoProvider.tsx
├── /contexts // context setup
│ └──TodoContext.tsx
├── /components  // components
│ └──TodoItem.tsx
│ └──TodoList.tsx
├── /types  // interfaces/types
│ └──Todo.ts
```
