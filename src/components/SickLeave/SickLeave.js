import React, { useState } from "react";
import Card from "../Card/Card.js";
import Heading from "../Heading/Heading.js";
import InputField from "../InputField/InputField.js";
import List from "../List/List.js";

export default function SickLeave() {
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
    }
  };

  const handleDelete = (index) => {
    const itemToDelete = items[index];
    const newItems = items.filter((item) => item !== itemToDelete);
    setItems(newItems);
  };

  return (
    <Card>
      <div className="sick-leave-container">
        <Heading title="Todays sick leave"></Heading>
        <List items={items} handleDelete={handleDelete} />
      </div>
      <InputField
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        value={input}
        placeholder=" + add person..."
      />
    </Card>
  );
}
