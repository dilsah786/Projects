import React from "react";
import Navbar from "./Components/Navbar";
import Moves from "./Pages/Moves";
import DetailsPage from "./Pages/DetailsPage";

const App = () => {
  return (
    <div>
      <div>
        {/* <Navbar />
        <Moves/> */}
        <DetailsPage/>
      </div>
    </div>
  );
};

export default App;
