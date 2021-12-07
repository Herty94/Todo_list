
import { Container } from "@mui/material";
import styled from "styled-components";
import { useState } from 'react';


export default function ToDoItem(item: any) {

  const [isDone, setDone] = useState(item.done);
  const dNow = new Date()
  const d = new Date(item.date)

  let hourNow = dNow.getHours()
  let hour = d.getHours()

  const Title = styled.h2`
    text-align: left;
    color: #d44d2f;
    font-weight:700;
  `;
  const Note = styled.p`
    text-align: left;
    font-size: 1rem;
    color: #8a8a8a;
  `;
  const DeadlineDate = styled.p`
    color: ${hour - hourNow > 2 ? 'rgb(' + (hour - hourNow) % 255 + ', 100, 0) ' : '#ff7575'};
    text-align: left;
    font-size: 1rem;
  `;


  const Div = styled.div`
    background-color: ${isDone ? '#dedede' : 'white'};
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
        <DeadlineDate>{"ddl: " + item.date.replace('T', " ")}</DeadlineDate>
      </Container>
    </Div >
  )
}

function useSate(arg0: boolean): [any, any] {
  throw new Error("Function not implemented.");
}
