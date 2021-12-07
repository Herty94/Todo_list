
import { Container } from "@mui/material";
import styled from "styled-components";
import { useState } from 'react';


export default function ToDoItem(item: any) {

  const [isDone, setDone] = useState(item.done);
  const dNow = new Date()
  const d = new Date(item.date)

  let dayNow = dNow.getMonth() * dNow.getDay();
  let day = d.getMonth() * d.getDay();

  console.log(day - dayNow)
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
    text-align: left;
    font-size: 1rem;
    color: #b3b3b3;
  `;
  const DeadlineTime = styled.p`
    color: #b3b3b3;
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
        <DeadlineDate>{item.date}</DeadlineDate>
        <DeadlineTime>{item.time}</DeadlineTime>
      </Container>
    </Div >
  )
}

function useSate(arg0: boolean): [any, any] {
  throw new Error("Function not implemented.");
}
