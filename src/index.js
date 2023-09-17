import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Container } from "App.styled";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <BrowserRouter basename="/rental-car-test-task/">
      <Container>
        <App />
      </Container>
    </BrowserRouter>
  // </React.StrictMode>
);
reportWebVitals();
