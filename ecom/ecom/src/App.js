import "./App.css";
import { ADD, SUB } from "./Redux/action";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AllRoutes from "./Routes/AllRoutes";
import Home from "./Pages/Home";
import { Link } from "react-router-dom";


function App() {
  const [render, setRender] = useState(true);
  const dispatch = useDispatch();

  const data = useSelector((store) => store.reducer);

  const handleCounterAdd = (val) => {
    dispatch(ADD());
  };

  const handleCounterSub = (val) => {
    if (data.counter < 1) {
      return alert("You are already at 0");
    }

    dispatch(SUB());
  };

  return (
    <div className="App">

      <h1>Counter : {data.counter} </h1>
      <button onClick={handleCounterAdd}>Add 1</button>
      <button onClick={handleCounterSub}>Sub 1</button>
      <br />
      <br />
     <Link to="/createtodo"> <button>Create New Todo</button></Link>
      <br />
      <br />
      <br />
      <br />
      <br />
      <AllRoutes/>
      <br />
    </div>
  );
}

export default App;
