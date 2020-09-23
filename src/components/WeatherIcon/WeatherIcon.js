import React from "react";
import styled from "styled-components";

export default function WeatherIcon({ src, alt }) {
  const WeatherIcon = styled.img`
    height: 1.2em;
    display: inline-block;
    margin-right: 0.2em;
  `;

  return <WeatherIcon src={src} alt={alt} />;
}
