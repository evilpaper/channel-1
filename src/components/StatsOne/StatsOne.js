import React from "react";
import Card from "../Card/Card.js";
import Heading from "../Heading/Heading.js";

export default function Stats() {
  return (
    <Card>
      <Heading title="Hej till kund"></Heading>
      <p className="stats-kpi-value">24</p>
      <p className="stats-kpi-unit">st</p>
      <div>
        <ul className="stats-diagram">
          <li className="stats-diagram-bar"></li>
          <li className="stats-diagram-bar"></li>
          <li className="stats-diagram-bar"></li>
          <li className="stats-diagram-bar"></li>
          <li className="stats-diagram-bar"></li>
          <li className="stats-diagram-bar"></li>
        </ul>
      </div>
    </Card>
  );
}
