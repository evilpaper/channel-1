import React, { useState, useEffect } from "react";
import Card from "../Card/Card.js";
import Heading from "../Heading/Heading.js";

export default function Weather(props) {
  const [weather, setWeather] = useState();

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Stockholm&APPID=10f491bfcbd56b60a7ed7024cf6c2a88&units=metric"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.weather[0].description);
        setWeather(data.weather[0].description);
      });
  }, []);

  return (
    <Card>
      <Heading title="Weather"></Heading>
      <p>{weather}</p>
    </Card>
  );
}
