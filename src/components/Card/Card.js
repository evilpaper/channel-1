import React from "react";
import styled from "styled-components";

const CardElement = styled.div`
  padding: 1.8em 1.8em;
  background-color: #fff;
  border-radius: 0.7em;
  box-shadow: 0 19px 38px hsla(227, 35%, 6%, 0.2),
    0 15px 12px hsla(227, 35%, 6%, 0.1);
  display: inline-block;
`;

export default function Card(props) {
  return <CardElement>{props.children}</CardElement>;
}
