

import React from "react";
import styled from "styled-components";
import List from "./components/List";

const Header = styled.header`
background-image: linear-gradient(
  to bottom right,
  rgb(206, 104, 104),
  rgb(243, 243, 116)
);
min-height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-size: calc(10px + 2vmin);
color: white;
`;

const App: React.FC = () => {


  return (
    <div className="App">
      <Header>
        <List />
      </Header>
    </div>
  );
}

export default App;
