import React from "react";
import Card from "../Card/Card.js";
import Heading from "../Heading/Heading.js";
import DailyBestImage from "../../images/nrd-D6Tu_L3chLE-unsplash.jpg";

export default function DailyBest() {
  return (
    <Card>
      <Heading title="Todays Best"></Heading>
      <img
        className="daily-best-image"
        src={DailyBestImage}
        alt="Today's best"
      />
    </Card>
  );
}
