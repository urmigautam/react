import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import Todos from "./MyComponents/Todos";
import AddTodo from "./MyComponents/AddTodo";
import About from "./MyComponents/About";
import Chatboard from "./MyComponents/Chatboard";

function App() {
  let initTodo;
  if (localStorage.getItem('todos') === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem('todos'));
  }
  
  const [todos, setTodos] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => e !== todo));
  };

  const AddTodos = (title, desc) => {
    console.log("adding ", title, desc);
    let sno = todos.length === 0 ? 0 : todos[todos.length - 1].sno + 1;
    const mytodo = { sno, title, desc };
    setTodos([...todos, mytodo]);
    console.log(mytodo);
  };

  return (
    <Router>
      <Header title="My Todos List" searchBar={false} />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/addtodo" element={<AddTodo addTodos={AddTodos} />} />
        <Route path="/" element={<Todos todos={todos} onDelete={onDelete} />} />
        <Route path="/chat" element={<Chatboard />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
