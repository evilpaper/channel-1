import React from "react";
import "./App.css";

import Clock from "../Clock/Clock.js";
import Weather from "../Weather/Weather.js";
import DailyInfo from "../DailyInfo/DailyInfo.js";

function App() {
  return (
    <div className="grid">
      <Clock />
      <Weather />
      <DailyInfo />
    </div>
  );
}

export default App;
