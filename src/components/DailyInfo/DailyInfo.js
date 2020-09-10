import React, { useState } from "react";
import Card from "../Card/Card.js";
import Heading from "../Heading/Heading.js";
import InputField from "../InputField/InputField.js";

export default function DailyInfo() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    if (e.keyCode === 13) {
      const newItems = [...items];
      newItems.push(e.target.value);
      setItems(newItems);
      setInput("");
      console.log(items);
    }
  };

  return (
    <Card>
      <div className="daily-info-container">
        <Heading title="Todays information"></Heading>

        <ul className="daily-info-list">
          {items.map((item, index) => {
            return <li key={index}>{item}</li>;
          })}
        </ul>
        <InputField
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          value={input}
          placeholder="Add your infomration"
        />
      </div>
    </Card>
  );
}
