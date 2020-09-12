import React from "react";
import "./App.css";

import Clock from "../Clock/Clock.js";
import Weather from "../Weather/Weather.js";
import DailyInfo from "../DailyInfo/DailyInfo.js";
import SickLeave from "../SickLeave/SickLeave.js";
import DailyBest from "../DailyBest/DailyBest.js";

function App() {
  return (
    <div className="grid">
      <Clock />
      <Weather />
      <DailyInfo />
      <SickLeave />
      <DailyBest />
    </div>
  );
}

export default App;
