import { ToggleButtonGroup, Input, ToggleButton } from "@mui/material";
import styled from "styled-components";
import ToDoItem from "./ToDoItem";
import { useFetchGET, putData, Item, postData } from "../helpers/mockFunctions";
import React, { useState } from "react";
import { deleteData } from "../helpers/mockFunctions";
import { randomBytes } from "crypto";
import NewItemForm from "./NewItemForm";
import { ContactlessOutlined } from "@mui/icons-material";




//styled components
const Title = styled.h1`
font-size: 1.2em;
text-align: center;
color: palevioletred;
font-weight: 900;
`;



const List: React.FC = () => {
  const [dataChange, setData] = useState(randomBytes(16));
  const [filter, setFilter] = useState(-1);
  const [input, setInput] = useState("");

  // geting data from mockapi.io using custom hook
  const itemUrl = process.env.REACT_APP_API_URL + '/items'
  const { data: items, loading } = useFetchGET(
    itemUrl,
    dataChange
  );

  const mapRender = (item: any) => {
    return (
      <ToDoItem
        title={item.title}
        note={item.note}
        date={item.date}
        done={item.done}
        id={item.id}
        key={`item-${item.id}`}
        onDelButtonClick={() =>
          handleDelete(itemUrl, item.id)
        }
        onBackButtonClick={() =>
          changeDone(itemUrl, item.id, item, false)
        }
        onDoneButtonClick={() =>
          changeDone(itemUrl, item.id, item, true)
        }
      />
    )
  };
  const renderedItems = () => {
    if (items)
      if (filter >= 0) {
        console.log("plačem")
        return items.filter((item: any) => item.done == filter).map((item: any) => {
          if (input !== "") {
            if (item.title.includes(input))
              return mapRender(item)
          }
          else
            return mapRender(item)
        })
      }
      else
        return items.map((item: any) => {
          console.log("čom to nejde")
          if (input !== "") {
            if (item.title.includes(input))
              return mapRender(item)
          }
          else
            return mapRender(item)
        })
  }




  // posting data to mockapi.io

  const handleFilter = (
    event: React.MouseEvent<HTMLElement>,
    value: number
  ) => {
    setFilter(value);
  };



  async function handleDelete(url: string, id: number) {
    await deleteData(url + "/" + id);
    setData(randomBytes(16))

  }
  async function changeDone(url: string, id: number, item: Item, done: boolean) {
    let newItem = { ...item, done: done };
    await putData(url + "/" + id, newItem)
    setData(randomBytes(16))
  }
  async function handlePost(url: string, data: Item) {
    await postData(url, data);
    setData(randomBytes(16))
  }

  return (

    <div className="bg-white object-contain rounded-2xl border-green-400 filter drop-shadow-lg">
      <div className="bg-red-100 rounded-t-xl">
        <Title>ToDo Zoznam</Title>
      </div>
      <div className="bg-white flex flex-row text-gray-400  items-center">
        <ToggleButtonGroup
          value={filter}
          exclusive
          onChange={handleFilter}
          color="primary"
          aria-label="filter items"
        >
          <ToggleButton value={-1}>All</ToggleButton>
          <ToggleButton value={1}>Done</ToggleButton>
          <ToggleButton value={0}>not Done</ToggleButton>
        </ToggleButtonGroup>
        <div className="flex-1 p-2 w-full">
          <Input
            type="search"
            placeholder="Search"
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </div>
      </div>
      <div className="bg-blue-200 max-h-custom object-contain px-4 border-green-400 overflow-y-scroll">
        {loading && <p>Loading data ...</p>}
        {renderedItems()}
        <p>Add new ToDo</p>
      </div>
      <div>
        <NewItemForm url={itemUrl} formFun={handlePost} />
      </div>
    </div >
  );
}
// state handlers
//TODO could be inproved using Redux


export default List;