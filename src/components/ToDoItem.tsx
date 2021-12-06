
import { Box, Button, CardActions, CardContent, Typography } from "@mui/material";
import styled from "styled-components";
import st from '@mui/material/styles/styled';
import { Container } from "@material-ui/core";
import React, { useState } from 'react';
import { SettingsInputAntennaTwoTone } from "@material-ui/icons";


export default function ToDoItem(item: any) {
  const [isDone, setDone] = useState(item.done)

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
  const RemoveButton = st(Button)`
    color: #c70000;
  `;
  const DoneButton = st(Button)`
    background-color: #24bd24;
  `;
  const Div = styled.div`
    background-color: ${isDone ? '#84b384' : '#616161'};
  `;
  return (
    <Div>
      <Container>
        <Title>{item.title}</Title>
        <Note>{item.note}</Note>
        <DeadlineDate>{item.date}</DeadlineDate>
        <DeadlineTime>{item.time}</DeadlineTime>
        {isDone ?
          <Button onClick={() => setDone(false)}>Back</Button>
          : <DoneButton onClick={() => setDone(true)}>Hotovo</DoneButton>}
        <RemoveButton>Zmazať</RemoveButton>
      </Container>
    </Div >
  )
}

function useSate(arg0: boolean): [any, any] {
  throw new Error("Function not implemented.");
}
