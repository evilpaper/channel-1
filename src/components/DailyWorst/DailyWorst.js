import React from "react";
import Card from "../Card/Card.js";
import Heading from "../Heading/Heading.js";
import DailyWorstImage from "../../images/mick-haupt-iXhbgXrUDSU-unsplash.jpg";
import Button from "../../atomics/button.js";

export default function DailyBest() {
  return (
    <Card>
      <Heading title="Todays Worst"></Heading>
      <img
        className="daily-worst-image"
        src={DailyWorstImage}
        alt="Today's worst"
      />
      <Button>I'm a Styled Component</Button>
      <Button primary>I'm a Styled Component</Button>
    </Card>
  );
}
