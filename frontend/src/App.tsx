import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { TodoProvider } from "./providers/TodoProvider";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
function App() {
  return (
    <TodoProvider>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />}></Route>
          <Route index path="/todo/:id" element={<Edit />}></Route>
        </Routes>
      </BrowserRouter>
    </TodoProvider>
  );
}

export default App;
