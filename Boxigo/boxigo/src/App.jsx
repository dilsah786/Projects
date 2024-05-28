import React from "react";
import Navbar from "./Components/Navbar";
import Moves from "./Pages/Moves";
import DetailsPage from "./Pages/DetailsPage";
import Routings from "./MyRouters/Routings";

const App = () => {
  return (
    <div>
      <div>
      <Navbar/>
        {/* {/* <Navbar />
        <Moves/> */}
        {/* <DetailsPage/>  */}
       <Routings/>
      </div>
    </div>
  );
};

export default App;
