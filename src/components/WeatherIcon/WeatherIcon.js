import React from "react";
import styled from "styled-components";

const WeatherIconElement = styled.img`
  height: 1.2em;
  display: inline-block;
  margin-right: 0.2em;
`;

export default function WeatherIcon({ src, alt }) {
  return <WeatherIconElement src={src} alt={alt} />;
}
