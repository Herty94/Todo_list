

import { Button, ButtonGroup, Input } from "@mui/material";
import styled from "styled-components";
import ToDoItem from "./ToDoItem";
import { useFetchGET, FetchPOST, FetchPUT } from "../mockFunctions";
import { TextareaAutosize } from "@mui/core";
import { useForm } from "react-hook-form";
import * as myConst from '../Constants/fileOfConstants'
import { useState } from "react";
import { DeleteData } from "../mockFunctions";
import st from '@mui/material/styles/styled';
import { OtherHousesTwoTone } from "@mui/icons-material";
import { randomBytes } from "crypto";

export default function List() {
    const { register, handleSubmit } = useForm();
    const [dataChange, setData] = useState(randomBytes(16));
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('');
    const [input, setInput] = useState("");
    // geting data from mockapi.io using custom hook
    const { data: items, loading } = useFetchGET(filter === '' ?
        myConst.URL + '?search=' + search
        : myConst.URL + filter,
        dataChange)
    // posting data to mockapi.io
    const onSubmit = (data: any) => {
        data.done = false;
        handlePost(myConst.URL, data)
        console.log(data);
        //window.location.reload();
    }
    const Title = styled.h1`
      color: #1f4fa7
    `;

    const RemoveButton = st(Button)`
    color: #c70000;
    `;

    const DoneButton = st(Button)`
    background-color: #24bd24;
    `;


    const handleKeyDown = (event: any) => {
        if (event.key === "Enter") {
            handleSearch(event.target.value);
        }
    };
    function handleSearch(searchText: string) {
        setSearch(searchText);
        setData(randomBytes(16));
    }
    function handleFilter(filter: string) {
        setFilter(filter)
        setData(randomBytes(16))
    }

    async function handlePost(url: string, data: any) {
        await FetchPOST(url, data)
        setData(randomBytes(16));
    }
    async function handleDelete(url: string, item: any) {
        await DeleteData(url)
        setData(randomBytes(16));
    }
    async function changeDone(url: string, id: number, item: any, done: boolean) {
        await DeleteData(url + '/' + id)
        item.done = done;
        await FetchPOST(url, item)
        setData(randomBytes(16));
    }


    return (
        <div className='h-screen border-4 border-green-400'>
            <div className='flex text-gray-400 flex-col border-4 border-green-400'>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button onClick={() => handleFilter("")}>All</Button>
                    <Button onClick={() => handleFilter("?filter=true")}>Done</Button>
                    <Button onClick={() => handleFilter('?filter=false')}>not Done</Button>
                </ButtonGroup>
                <Input type='text'
                    placeholder='Search'
                    onKeyDown={handleKeyDown}
                    value={input}
                    onChange={event => setInput(event.target.value)} />
            </div>
            <div className='h-2/4 border-4 border-green-400 overflow-scroll'>


                <Title>Názov</Title>
                {loading && <p>Loading data ...</p>}
                {items && items.map((item: any) => {
                    return (
                        <>
                            <ToDoItem
                                title={item.title}
                                note={item.note}
                                date={item.date}
                                time={item.time}
                                done={item.done}
                                key={item.id} />
                            {item.done ?
                                <Button onClick={() => changeDone(myConst.URL, item.id, item, false)}>Back</Button>
                                : <DoneButton onClick={() => changeDone(myConst.URL, item.id, item, true)}>Hotovo</DoneButton>}
                            <RemoveButton onClick={() => {
                                handleDelete(String(myConst.URL + '/' + item.id), item);
                            }}>Zmazať</RemoveButton>
                        </>
                    )
                })}
            </div>
            <form className='flex text-black flex-col bg-gray-300' onSubmit={handleSubmit(onSubmit)} >
                <Input {...register("title", { required: true })} type='text'
                    placeholder='Title' />
                <TextareaAutosize
                    {...register("note")}
                    placeholder='write notes'
                    maxRows={3} />
                <Input  {...register("date")} type='datetime-local' />
                <Input type='submit' value='Pridať' />
            </form>
        </div >
    )
}