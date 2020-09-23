import React from "react";
import styled from "styled-components";
import logo from "../../images/logo.svg";
import "./App.css";

import Clock from "../Clock/Clock.js";
import Weather from "../Weather/Weather.js";

function App() {
  const Header = styled.header`
    background-color: white;
    padding: 0.8em;
    width: 100%;
    display: flex;
    justify-content: space-between;
  `;

  const Logo = styled.div`
    width: 1.6em;
  `;

  return (
    <>
      <Header>
        <Logo>
          <img src={logo} alt="Channel-1 logo"></img>
        </Logo>
        <Clock />
        <Weather />
      </Header>
    </>
  );
}

export default App;
