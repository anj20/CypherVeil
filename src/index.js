import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./global.css";
import { ContractProvider } from "./context/MeetingContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContractProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContractProvider>
);
