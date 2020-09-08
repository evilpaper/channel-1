import React, { useState, useEffect } from "react";
import Card from "../Card/Card.js";
import Heading from "../Heading/Heading.js";

export default function Weather(props) {
  const [weather, setWeather] = useState("");
  const [temperature, setTemperature] = useState("");

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Stockholm&APPID=10f491bfcbd56b60a7ed7024cf6c2a88&units=metric"
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data.weather[0].description);
        setTemperature(data.main.temp);
      });
  }, []);

  return (
    <Card>
      <Heading title="Weather" />
      <p>{weather}</p>
      <p>Temperature: {temperature}°C</p>
    </Card>
  );
}
