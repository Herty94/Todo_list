import { Container, Button } from "@mui/material";
import styled from "styled-components";
import { useState } from "react";
import st from "@mui/material/styles/styled";

export default function ToDoItem(item: any) {
  const [isDone, setDone] = useState(item.done);
  const dNow = new Date();
  const d = new Date(item.date);

  let hourNow = dNow.getHours();
  let hour = d.getHours();

  const Title = styled.h2`
    text-align: left;
    color: #d44d2f;
    font-weight: 700;
  `;
  const Note = styled.p`
    text-align: left;
    font-size: 1rem;
    color: #8a8a8a;
  `;
  const DeadlineDate = styled.p`
    color: ${hour - hourNow > 2
      ? "rgb(" + ((hour - hourNow) % 255) + ", 100, 0) "
      : "#ff7575"};
    text-align: left;
    font-size: 1rem;
  `;
  const DoneButton = st(Button)`
  background-color: lightgreen;
  `;

  const BackButton = st(Button)`
  background-color: lightblue;
  `;

  const RemoveButton = st(Button)`
  color: #c70000;
  background-color:#e38f8f ;
  `;

  const Div = styled.div`
    background-color: ${isDone ? "#dedede" : "white"};
    border-top-left-radius: 0.375rem;
    border-bottom-left-radius  0.375rem;
    padding-top: 1rem;
    height:100%
  `;

  return (
    <Div>
      <Container>
        <Title>{item.title}</Title>
        <Note>{item.note}</Note>
        <DeadlineDate>
          {item.date && "ddl: " + item.date.replace("T", " ")}
        </DeadlineDate>
      </Container>
      {item.done ? (
        <BackButton onClick={item.onBackButtonClick}>Back</BackButton>
      ) : (
        <DoneButton onClick={item.onDoneButtonClick}>Hotovo</DoneButton>
      )}
      <RemoveButton onClick={item.onDelButtonClick}>Zmazať</RemoveButton>
    </Div>
  );
}

function useSate(arg0: boolean): [any, any] {
  throw new Error("Function not implemented.");
}
