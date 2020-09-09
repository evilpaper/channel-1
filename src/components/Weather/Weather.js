import React, { useState, useEffect } from "react";
import Card from "../Card/Card.js";
import Heading from "../Heading/Heading.js";

import Cloud from "../../images/cloud.svg";
import Hail from "../../images/hail.svg";
import Moon from "../../images/moon.svg";
import PartlyMoon from "../../images/partlyMoon.svg";
import PartlySunny from "../../images/partlySunny.svg";
import Rain from "../../images/rain.svg";
import Storm from "../../images/storm.svg";
import Snow from "../../images/snow.svg";
import Sun from "../../images/sun.svg";

import WeatherIcon from "../WeatherIcon/WeatherIcon.js";

export default function Weather() {
  const [weatherDescription, setWeatherDescription] = useState("");
  const [temperature, setTemperature] = useState("");
  const [weatherIcon, setweatherIcon] = useState("");

  useEffect(() => {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=Stockholm&APPID=10f491bfcbd56b60a7ed7024cf6c2a88&units=metric"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setWeatherDescription(data.weather[0].description);
        setweatherIcon(data.weather[0].icon);
        setTemperature(data.main.temp);
      });
  }, []);

  const icon = () => {
    switch (weatherIcon) {
      case "01d":
        return Sun;
      case "01n":
        return Moon;
      case "02d":
        return PartlySunny;
      case "02n":
        return PartlyMoon;
      case "03d":
        return Cloud;
      case "03n":
        return Cloud;
      case "04d":
        return Cloud;
      case "04n":
        return Cloud;
      case "09d":
        return Hail;
      case "09n":
        return Hail;
      case "10d":
        return Rain;
      case "10n":
        return Rain;
      case "11d":
        return Storm;
      case "11n":
        return Storm;
      case "13d":
        return Snow;
      case "13n":
        return Snow;
      case "50d":
        return Cloud;
      case "50n":
        return Cloud;

      default:
        return null;
    }
  };

  return (
    <Card>
      <div className="weather-container">
        <Heading title="Weather" />
        <WeatherIcon src={icon()} alt="Hail" />
        <p>{weatherDescription}</p>
        <p>Temperature: {temperature}°C</p>
      </div>
    </Card>
  );
}
