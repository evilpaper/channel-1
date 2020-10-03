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
  position: relative;
`;

const ListContainer = styled.div`
  overflow: scroll;
  overflow-y: scroll;
  min-height: 66%;
  max-height: 66%;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
  }
  &::-webkit-scrollbar:vertical {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 8px;
    border: 1px solid white;
    background-color: hsla(232, 33%, 3%, 0.4);
  }
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
        <Heading title="Dagens info"></Heading>
        <ListContainer>
          <List items={items} handleDelete={handleDelete} />
        </ListContainer>
        <InputField
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          value={input}
          placeholder="+ Lägg till..."
        />
      </CardContainer>
    </Card>
  );
}
