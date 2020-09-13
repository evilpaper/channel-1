import React from "react";
import "./App.css";

import Clock from "../Clock/Clock.js";
import Weather from "../Weather/Weather.js";
import DailyInfo from "../DailyInfo/DailyInfo.js";
import DailyActions from "../DailyActions/DailyActions.js";
import SickLeave from "../SickLeave/SickLeave.js";
import DailyBest from "../DailyBest/DailyBest.js";
import DailyWorst from "../DailyWorst/DailyWorst.js";

function App() {
  return (
    <div className="grid">
      <div className="grid-column">
        <Clock />
        <Weather />
        <DailyBest />
      </div>
      <div className="grid-column">
        <DailyInfo />
        <SickLeave />
        <DailyWorst />
      </div>
      <div className="grid-column">
        <DailyInfo />
        <DailyActions />
      </div>
      <div className="grid-column">
        <DailyInfo />
        <SickLeave />
      </div>
    </div>
  );
}

export default App;
