import React, { useState, useEffect } from "react";
import Card from "../Card/Card.js";

export default function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, [time]);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const today = new Date();
  const day = today.getDate();
  const weekDay = days[today.getDay()];
  const month = today.getMonth();
  const date = `${months[month - 1]} ${day}`;
  return (
    <Card>
      <div className="clock-container">
        <p className="clock-time">{time}</p>
        <p className="clock-date">
          {weekDay}, {date}
        </p>
      </div>
    </Card>
  );
}
