import React from "react";
import Card from "../Card/Card.js";
import Heading from "../Heading/Heading.js";
import DailyWorstImage from "../../images/mick-haupt-iXhbgXrUDSU-unsplash.jpg";

export default function DailyBest() {
  return (
    <Card>
      <Heading title="Daily Worst"></Heading>
      <div className="daily-worst-image">
        <img src={DailyWorstImage} alt="Today's worst" />
      </div>
    </Card>
  );
}
