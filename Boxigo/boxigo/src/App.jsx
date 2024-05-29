import React from "react";
import Navbar from "./Components/Navbar";
import Moves from "./Pages/Moves";
import DetailsPage from "./Pages/DetailsPage";
import Routings from "./MyRouters/Routings";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <div>
      <Navbar  />
        {/* {/* <Navbar />
        <Moves/> */}
        {/* <DetailsPage/>  */}
       <Routings/>
       <Footer/>
      </div>
    </div>
  );
};

export default App;
