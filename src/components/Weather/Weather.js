import React, { useState, useEffect } from "react";
import Card from "../Card/Card.js";
import Heading from "../Heading/Heading.js";

export default function Weather(props) {
  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Stockholm&APPID=fc3561e6ebf38094944dc86231f05958&units=metric"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <Card>
      <Heading title="Weather"></Heading>
    </Card>
  );
}
