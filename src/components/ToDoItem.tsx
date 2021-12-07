
import { Box, Button, CardActions, CardContent, Container, Typography } from "@mui/material";
import styled from "styled-components";
import st from '@mui/material/styles/styled';
import { useEffect, useState } from 'react';
import { DeleteData } from "../mockFunctions";
import { SettingsInputSvideoOutlined } from "@mui/icons-material";

export default function ToDoItem(item: any) {
  const [isDone, setDone] = useState(item.done);

  const Title = styled.h2`
    color: #23ff11;
  `;
  const Note = styled.p`
    color: #1effa3;
  `;
  const DeadlineDate = styled.p`
    color: #898989;
  `;
  const DeadlineTime = styled.p`
    color: #898989;
  `;


  const Div = styled.div`
    background-color: ${isDone ? '#84b384' : '#616161'};
    border: 2px solid red;
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
