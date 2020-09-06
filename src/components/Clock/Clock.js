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

  const today = new Date();
  const date = `${today.getFullYear()}/${
    today.getMonth() + 1
  }/${today.getDate()}`;
  return (
    <>
      <Card>
        <Heading title="Time"></Heading>
        <p>{date}</p>
        <p>{time}</p>
      </Card>
    </>
  );
}
