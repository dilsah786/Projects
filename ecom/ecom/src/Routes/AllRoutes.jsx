import React from "react";
import CreateTodo from "../Todos/CreateTodos";
import { Routes, Route } from "react-router-dom";
import EditTodo from "../Todos/EditTodo";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/dashboard" element={<Home />} />
        <Route path="/createtodo" element={<CreateTodo />} />
        <Route path="/edittodo/:id" element={<EditTodo />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
