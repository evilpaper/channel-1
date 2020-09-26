import React, { useState, useEffect } from "react";
import styled from "styled-components";

const P1 = styled.p`
  color: var(--color-heading);
  text-align: center;
  font-size: 0.9em;
`;

const P2 = styled.p`
  color: var(--color-subheading);
  text-align: center;
  font-size: 0.9em;
`;

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
    <div>
      <P1>{time}</P1>
      <P2>
        {weekDay}, {date}
      </P2>
    </div>
  );
}
