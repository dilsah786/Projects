import logo from "./logo.svg";
import "./App.css";
import { store } from "./Redux/store";
import { ADD, ADD_ONE, SUB, SUB_ONE, getAllProducts } from "./Redux/action";
import { useState } from "react";
import { useEffect } from "react";
import Products from "./Pages/Products";

function App() {
  const [render, setRender] = useState(true);
  const { dispatch, getState, subscribe } = store;
  const data = getState();

  subscribe(() => {
    setRender(!render);
  });

  const handleCounterAdd = (val) => {
    dispatch(ADD());
  };

  const handleCounterSub = (val) => {
    if (data.counter < 1) {
      return alert("You are already at 0");
    }

    dispatch(SUB());
  };

  console.log(data.counter);

  return (
    <div className="App">
      <h1>Counter : {data.counter} </h1>
      <button onClick={handleCounterAdd}>Add 1</button>
      <button onClick={handleCounterSub}>Sub 1</button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Products />
    </div>
  );
}

export default App;
