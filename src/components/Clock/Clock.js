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

  const today = new Date();
  const date = `${today.getFullYear()}${
    today.getMonth() + 1
  }${today.getDate()}`;
  return (
    <>
      <Card>
        <h1>{date}</h1>
        <h1>{time}</h1>
      </Card>
    </>
  );
}
