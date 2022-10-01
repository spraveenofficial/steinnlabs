import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import AuthProvider from "./context/auth.context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
