import React from "react";
import styled from "styled-components";
import Card from "../Card/Card.js";
import Heading from "../Heading/Heading.js";
import img from "../../images/nrd-D6Tu_L3chLE-unsplash.jpg";

const ImageCard = styled.div`
  height: 10em;
  width: 16em;
  overflow: hidden;
  background-size: cover;
  background-position: center;
  background-image: url(${img});
  border-radius: 0.7em;
  border: 1px solid var(--color-light-gray);
  box-shadow: 0 19px 38px hsla(227, 35%, 6%, 0.2),
    0 15px 12px hsla(227, 35%, 6%, 0.1);
  display: inline-block;
`;

export default function DailyBest() {
  return (
    <Card>
      <ImageCard>
        <Heading title="Todays Best"></Heading>
        {/* <StyledImage
        className="daily-best-image"
        src={backgroundImage}
        alt="Today's best"
      /> */}
      </ImageCard>
    </Card>
  );
}
