import React, { useState } from "react";
import styled from "styled-components";
import Card from "../Card/Card.js";
import Heading from "../Heading/Heading.js";
import InputField from "../InputField/InputField.js";
import List from "../List/List.js";

const CardContainer = styled.div`
  height: 10em;
  width: 16em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

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
    }
  };

  const handleDelete = (index) => {
    const itemToDelete = items[index];
    const newItems = items.filter((item) => item !== itemToDelete);
    setItems(newItems);
  };

  return (
    <Card>
      <CardContainer>
        <div>
          <Heading title="Todays information"></Heading>
          <List items={items} handleDelete={handleDelete} />
        </div>
        <InputField
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          value={input}
          placeholder=" + add information..."
        />
      </CardContainer>
    </Card>
  );
}
