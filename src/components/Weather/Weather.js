import React, { useState, useEffect } from "react";
import styled from "styled-components";

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

const WeatherWidget = styled.div``;

const P1 = styled.p`
  color: var(--color-heading);
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

// const P2 = styled.p`
//   color: var(--color-subheading);
//   text-align: right;
//   font-size: 0.9em;
// `;

export default function Weather() {
  // const [weatherDescription, setWeatherDescription] = useState("");
  const [weatherIcon, setweatherIcon] = useState("");
  const [temperature, setTemperature] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=Stockholm&APPID=${process.env.REACT_APP_WEATHERKEY}&units=metric`

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        // setWeatherDescription(
        //   data.weather[0].description.substr(0, 1).toUpperCase() +
        //     data.weather[0].description.substr(1)
        // );
        setweatherIcon(data.weather[0].icon);
        setTemperature(Math.round(data.main.temp));
      });
  }, [url]);

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
    <WeatherWidget>
      <div>
        <P1>
          <WeatherIcon src={icon()} alt="weather-icon" />
          {temperature}°C
        </P1>
        {/* <P2>{weatherDescription}</P2> */}
      </div>
    </WeatherWidget>
  );
}
