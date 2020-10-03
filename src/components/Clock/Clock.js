import React, { useState, useEffect } from "react";
import styled from "styled-components";

const P1 = styled.p`
  color: var(--color-heading);
  text-align: center;
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
    "Söndag",
    "Måndag",
    "Tisdag",
    "Onsdag",
    "Torsdag",
    "Fredag",
    "Lördag",
  ];

  const months = [
    "Januari",
    "Februari",
    "Mars",
    "April",
    "Maj",
    "Juni",
    "Juli",
    "Augusti",
    "September",
    "Oktober",
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
