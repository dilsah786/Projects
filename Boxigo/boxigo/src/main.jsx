import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DataProvider } from "./ContextAPi/DataContext.jsx";
import { BrowserRouter } from "react-router-dom"; // Alias for better readability

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <DataProvider>
      <App />
    </DataProvider>
  </BrowserRouter>
);
