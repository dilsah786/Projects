import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { updateTodoRequest } from "../Redux/action";

const EditTodo = (handleEditTodoFun) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState(false);

  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id);

  const getSingleTodo = async (id) => {
    try {
      const result = await fetch(`http://localhost:3000/todos/${id}`);
      const res = await result.json();

      setTitle(res.title);
      setDate(res.dueDate);
      setStatus(res.completed);
    } catch (err) {
      console.log(err);
    }
  };

  const editTodoFun = async () => {
    const updatedTodo = {
      completed: false,
      title: title,
      dueDate: date,
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
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getSingleTodo(id);
  }, [id]);

  return (
    <div>
      <h1>Edit Todo </h1>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Please enter your Task"
      />
      <input
        value={date}
        onChange={(e) => setDate(e.target.value)}
        type="date"
      />
      <Link to="/">
        {" "}
        <button onClick={editTodoFun}>Edit Todo</button>{" "}
      </Link>

      <br />
      <br />
      <br />
      <br />
      <Link to={"/dashboard"}>
        {" "}
        <button>View All Todo</button>
      </Link>
      <br />
      <div>
        <h1>The Todo which you are going to update</h1>
        <h2>Title: {title} </h2>
        <h3>Status : {status ? "Completed" : "Not Completed"}</h3>
        <h3>Due Date : {date} </h3>
      </div>
    </div>
  );
};

export default EditTodo;
