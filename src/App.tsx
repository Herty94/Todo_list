import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import List from "./components/List";

const url = 'https://61ae505ba7c7f3001786f792.mockapi.io/items';

function App() {
  const Title = styled.h1`
    font-size: 1.2em;
    text-align: center;
    color: palevioletred;
  `;

  return (
    <div className="App">
      <header className="App-header">

        <Title>Test styled-components</Title>
        <List />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
