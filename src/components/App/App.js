import React from "react";
import styled from "styled-components";
import logo from "../../images/logo.svg";
import "./App.css";

import Clock from "../Clock/Clock.js";
import Weather from "../Weather/Weather.js";
import DailyInfo from "../DailyInfo/DailyInfo.js";
// import DailyBest from "../DailyBest/DailyBest.js";

const Header = styled.header`
  background-color: white;
  padding: 0.8em;
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 1px 0 0 hsla(232, 33%, 4%, 0.2);
`;

const Logo = styled.div`
  width: 1.8em;
  display: flex;
  align-item: center;
`;

const Container = styled.div`
  padding: 1.4em;
  display: flex;
`;

function App() {
  return (
    <>
      <Header>
        <Logo>
          <img src={logo} alt="Channel-1 logo"></img>
        </Logo>
        <Clock />
        <Weather />
      </Header>
      <Container>
        <DailyInfo />
      </Container>
    </>
  );
}

export default App;
