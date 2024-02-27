import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createTodoFailure,
  createTodoRequest,
  createTodoSuccess,
} from "../Redux/action";
import Todos from "./Todos";

const CreateTodo = () => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const todosData = useSelector((store) => store.todoReducer);
  //   console.log(task);
  //   console.log(date);
  const dispatch = useDispatch();

  const CreateTodoFun = async () => {
    const newTodo = {
      title: task,
      completed: false,
      dueDate: date,
    };
    if (task) {
      try {
        dispatch(createTodoRequest(true));
        const result = await fetch(`http://localhost:3000/todos`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTodo),
        });
        const res = await result.json();
        dispatch(createTodoSuccess(res));
        alert("Todo created successfully");
      } catch (err) {
        console.log(err);
        dispatch(createTodoFailure(true));
      }
    } else {
      alert("Please select a task")
    }
  };

  return (
    <div className="create_compo">
      <h1 className="h1_create">Create New Todo </h1>
      <div className="create_items">
        <textarea
          className="create_input"
          onChange={(e) => setTask(e.target.value)}
          placeholder="Please enter your Task"
        />
        <input
          className="create_input_date"
          type="date"
          onChange={(e) => setDate(e.target.value)}
        />
        <button className="create_button" onClick={CreateTodoFun}>
          Create Todo
        </button>
        <br />
        <br />
        <br />
        <br />
      </div>
      <div>
        <Todos />
      </div>
    </div>
  );
};

export default CreateTodo;
