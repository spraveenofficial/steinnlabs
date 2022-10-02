import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import AuthProvider from "./context/auth.context";
import { PlayerProvider } from "./context/player.context";
ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <PlayerProvider>
      <App />
    </PlayerProvider>
  </AuthProvider>
);
