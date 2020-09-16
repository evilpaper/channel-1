import React from "react";
import "./App.css";

import Clock from "../Clock/Clock.js";
import Weather from "../Weather/Weather.js";
import DailyInfo from "../DailyInfo/DailyInfo.js";
import DailyActions from "../DailyActions/DailyActions.js";
import SickLeave from "../SickLeave/SickLeave.js";
import DailyBest from "../DailyBest/DailyBest.js";
import DailyWorst from "../DailyWorst/DailyWorst.js";
import StatsOne from "../StatsOne/StatsOne.js";

function App() {
  return (
    <div className="grid">
      <div className="grid-column">
        <Clock />
        <Weather />
      </div>
      <div className="grid-column">
        <DailyBest />
        <DailyWorst />
      </div>
      <div className="grid-column">
        <StatsOne />
        <DailyInfo />
        <SickLeave />
      </div>
      <div className="grid-column">
        <DailyActions />
      </div>
    </div>
  );
}

export default App;
