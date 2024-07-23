import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Button } from "@mui/material";
import Login from "./Login";
import ToDoList from "./ToDoList";
import Register from "./Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/list" element={<ToDoList />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
