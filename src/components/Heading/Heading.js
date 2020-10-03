import React from "react";
import styled from "styled-components";

const HeaderElement = styled.h1`
  font-weight: 500;
  margin-top: 0;
  padding-bottom: 1em;
  font-size: 0.9em;
  text-transform: uppercase;
  color: var(--color-subheading);
  letter-spacing: 1px;
`;

export default function Heading(props) {
  return <HeaderElement>{props.title}</HeaderElement>;
}
