import { Container, Button } from "@mui/material";
import styled from "styled-components";
import st from "@mui/material/styles/styled";
import { MouseEventHandler } from 'react'
import { Item } from "../helpers/mockFunctions";


const RemoveButton = st(Button)`
  color: #c70000;
  background-color:#e38f8f ;
  `;


const Title = styled.h2`
    text-align: left;
    color: #d44d2f;
    font-weight: 700;
    font-size:1.2rem
  `;
const Note = styled.p`
    text-align: left;
    font-size: 1rem;
    color: #8a8a8a;
  `;
const DoneButton = st(Button)`
  background-color: lightgreen;
  `;

const BackButton = st(Button)`
  background-color: lightblue;
  `;




type Props = { isDone: boolean };
type DiffProbe = { diffinH: number };

const Div = styled.div`
  width:100%;
  display:flex;
  background-color: ${(props: Props) => props.isDone === true ? "#f1dbff" : "white"};
  border-top-left-radius: 0.375rem;
  border-bottom-left-radius  0.375rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  margin:0;
`;

const DeadlineDate = styled.p`
color: ${(props: DiffProbe) =>
    props.diffinH < 48 ? "rgb(150," + 255 / 48 * props.diffinH + ",0)" : "green"
  };
width: 50 %;
text-align: right;
font-size: 0.9rem;
`;

interface ThisItem extends Item {
  onDelButtonClick: MouseEventHandler<HTMLButtonElement>,
  onBackButtonClick: MouseEventHandler<HTMLButtonElement>,
  onDoneButtonClick: MouseEventHandler<HTMLButtonElement>
}




const ToDoItem: React.FC<ThisItem> = (props) => {
  const date1 = new Date();
  const date2 = new Date(props.date);

  // To calculate the time difference of two dates
  const Difference_In_Time = date2.getTime() - date1.getTime();

  // To calculate the no. of days between two dates

  const Difference_In_Days = Math.floor(Difference_In_Time / (1000 * 3600 * 24));
  const Difference_In_Hours = Math.round(Difference_In_Time / (1000 * 3600));


  return (
    <div className="flex bg-white rounded-md my-4 filter drop-shadow-xl">
      <Div isDone={props.done}>
        <div className="w-full flex-row">
          <Container>
            <Title>{props.title}</Title>
            <Note>{props.note}</Note>
            <DeadlineDate diffinH={Difference_In_Hours}>
              {props.date && `${Difference_In_Days > 0 ? Difference_In_Days + "d" : " "}` + (Difference_In_Hours - (24 * Difference_In_Days)) + "h"}
            </DeadlineDate>
          </Container>

        </div>
        <div className="flex flex-col">
          <RemoveButton onClick={props.onDelButtonClick}>X</RemoveButton>
          {props.done ? (
            <BackButton onClick={props.onBackButtonClick}>{">"}</BackButton>
          ) : (
            <DoneButton onClick={props.onDoneButtonClick}>O</DoneButton>
          )}
        </div>
      </Div>
    </div >
  );
}

export default ToDoItem;