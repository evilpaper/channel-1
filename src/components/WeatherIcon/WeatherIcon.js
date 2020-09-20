import React from "react";
import styled from "styled-components";

export default function WeatherIcon({ src, alt }) {
  const WeatherIcon = styled.img`
    height: 1.6em;
    display: inline-block;
    margin-right: 0.3em;
  `;

  return <WeatherIcon src={src} alt={alt} />;
}
