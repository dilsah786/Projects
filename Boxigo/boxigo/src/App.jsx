import React from "react";
import Navbar from "./Components/Navbar";
import Routings from "./MyRouters/Routings";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div>
      <header className="">
        <Navbar />
      </header>
      <main className="">
        <Routings />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
