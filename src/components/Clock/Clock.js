import React, { useState, useEffect } from "react";
import Card from "../Card/Card.js";
import Heading from "../Heading/Heading.js";

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
  const month = today.getMonth();
  const year = today.getFullYear();
  const date = `${day} ${months[month - 1]} ${year}`;
  return (
    <>
      <Card>
        <Heading title="Time"></Heading>
        <div className="clock-container">
          <p className="clock-time">{time}</p>
          <p className="clock-date">{date}</p>
        </div>
      </Card>
    </>
  );
}
