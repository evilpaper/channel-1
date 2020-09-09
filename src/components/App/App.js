import React from "react";
import Clock from "../Clock/Clock.js";
import Weather from "../Weather/Weather.js";
import "./App.css";

function App() {
  return (
    <div className="grid">
      <Clock />
      <Weather />
      <Weather />
      <Weather />
      <Clock />
      <Weather />
      <Weather />
      <Clock />
      <Weather />
      <Weather />
    </div>
  );
}

export default App;
