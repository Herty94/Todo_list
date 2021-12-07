import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";
import List from "./components/List";

const url = 'https://61ae505ba7c7f3001786f792.mockapi.io/items';

function App() {

  return (
    <div className="App">
      <header className="App-header">

        <List />
      </header>
    </div>
  );
}

export default App;
