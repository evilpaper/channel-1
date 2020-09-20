import React from "react";
import "./App.css";

import Clock from "../Clock/Clock.js";
import Weather from "../Weather/Weather.js";

function App() {
  return (
    <>
      <Weather />
      <Clock />
    </>
  );
}

export default App;
