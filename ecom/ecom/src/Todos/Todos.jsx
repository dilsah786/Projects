import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTodoRequest,
  getTodoFailure,
  getTodoRequest,
  getTodoSuccess,
  updateTodoRequest,
  updateTodoSuccess,
} from "../Redux/action";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Todos = () => {
  const [status, setStatus] = useState(false);
  const dispatch = useDispatch();
  const todoData = useSelector((store) => store.todoReducer);

  const { todos, loading } = todoData;

  const getTodosFun = async () => {
    try {
      dispatch(getTodoRequest(true));
      const result = await fetch(`http://localhost:3000/todos`);
      const res = await result.json();
      dispatch(getTodoSuccess(res));
    } catch (err) {
      console.log(err);
      dispatch(getTodoFailure(true));
    }
  };

  const handleDeleteTodo = async (id) => {
    try {
      dispatch(deleteTodoRequest(true));
      const result = await fetch(`http://localhost:3000/todos/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const res = await result.json();
      console.log(res);
      getTodosFun();
    } catch (err) {
      console.log(err);
    }
  };

  const handleUpdateFun = async (id) => {
    setStatus(!status);
    console.log(status);
    const updatedTodo = {
      completed: status,
    };
    try {
      dispatch(updateTodoRequest(true));
      const result = await fetch(`http://localhost:3000/todos/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedTodo),
      });
      const res = await result.json();
      console.log(res);
      getTodosFun();
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getTodosFun();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>S. No. </th>
            <th>Title</th>
            <th>Status</th>
            <th>Due Date</th>
            <th>Delete</th>
            <th>Edit</th>
          </tr>
        </thead>
        {todos &&
          todos.map((todo) => {
            return (
              <tbody>
                <tr>
                  <td> {todo.id} . </td>
                  <td> {todo.title}</td>
                  <td>
                    <button
                      style={{
                        backgroundColor: "#5AA5E7",
                        color: "white",
                        border: "none",
                        borderRadius: "5px",
                      }}
                      loading="lazy"
                      onClick={() => handleUpdateFun(todo.id)}
                    >
                      {todo.completed ? "Completed" : "Not Completed"}
                    </button>
                  </td>
                  <td> {todo.dueDate} </td>
                  <td>
                    <button
                      onClick={() => handleDeleteTodo(todo.id)}
                      style={{ backgroundColor: "#E93B3B" }}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <Link to={`/edittodo/${todo.id}`}>
                      <button>Edit Todo</button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            );
          })}
      </table>
    </div>
  );
};

export default Todos;
