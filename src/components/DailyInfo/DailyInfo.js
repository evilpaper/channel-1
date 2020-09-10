import React from "react";
import Card from "../Card/Card.js";
import Heading from "../Heading/Heading.js";
import InputField from "../InputField/InputField.js";

export default function DailyInfo() {
  const handleChange = () => {};
  const handleSubmit = () => {};
  const name = "";

  return (
    <Card>
      <Heading title="Todays Information"></Heading>
      <InputField
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        value={name}
        placeholder="Want to add something"
      />
    </Card>
  );
}
