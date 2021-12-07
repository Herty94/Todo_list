

import { Button, ToggleButtonGroup, Input, ToggleButton } from "@mui/material";
import styled from "styled-components";
import ToDoItem from "./ToDoItem";
import { useFetchGET, FetchPOST } from "../helpers/mockFunctions";
import { TextareaAutosize } from "@mui/core";
import { useForm } from "react-hook-form";
import * as myConst from '../Constants/fileOfConstants'
import { useState } from "react";
import { DeleteData } from "../helpers/mockFunctions";
import st from '@mui/material/styles/styled';
import { randomBytes } from "crypto";

export default function List() {
    const { register, handleSubmit, reset } = useForm();
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
        reset();
        console.log(data);
        //window.location.reload();
    }

    //styled components
    const Title = styled.h1`
    font-size: 1.2em;
    text-align: center;
    color: palevioletred;
    font-weight: 900;
    `;

    const RemoveButton = st(Button)`
    color: #c70000;
    background-color:#e38f8f ;
    `;

    const DoneButton = st(Button)`
    background-color: lightgreen;
    `;

    const BackButton = st(Button)`
    background-color: lightblue;
    `;


    // state handlers 
    //TODO could be inproved using Redux 
    const handleKeyDown = (event: any) => {
        if (event.key === "Enter") {
            handleSearch(event.target.value);
        }
    };
    function handleSearch(searchText: string) {
        setSearch(searchText);
        setData(randomBytes(16));
    }
    const handleFilter = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string | "",
    ) => {
        setFilter(newAlignment);
        setData(randomBytes(16));
    };

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
        <div className='bg-white object-contain rounded-2xl border-green-400 filter drop-shadow-lg'>
            <div className='bg-red-100 rounded-t-xl'>
                <Title>ToDo Zoznam</Title>
            </div>
            <div className='bg-white flex flex-row text-gray-400  items-center'>

                <ToggleButtonGroup value={filter}
                    exclusive onChange={handleFilter}
                    color='primary'
                    aria-label="filter items">
                    <ToggleButton value="">All</ToggleButton>
                    <ToggleButton value="?filter=true">Done</ToggleButton>
                    <ToggleButton value='?filter=false'>not Done</ToggleButton>
                </ToggleButtonGroup>
                <div className='flex-1 p-2 w-full'>
                    {/* for some reason, styled components is refreshing this input after every single character tiped */}
                    <Input type='search'

                        placeholder='Search'
                        onKeyDown={handleKeyDown}
                        value={input}
                        onChange={event => setInput(event.target.value)} />
                </div>
            </div >
            <div className='bg-blue-200 object-contain px-4 border-green-400 overflow-y-scroll'>



                {loading && <p>Loading data ...</p>}
                {items && items.map((item: any) => {
                    return (
                        <div className='flex flex-row bg-white rounded-md my-4 filter drop-shadow-xl'>
                            <div className='w-full'>
                                <ToDoItem
                                    title={item.title}
                                    note={item.note}
                                    date={item.date}
                                    time={item.time}
                                    done={item.done}
                                    key={item.id} />
                            </div>
                            {/* TODO using redux buttons could be placed inside ToDoItem component */}
                            <div className='flex flex-col bg-white rounded-md my-4 filter'>
                                {item.done ?
                                    <BackButton onClick={() => changeDone(myConst.URL, item.id, item, false)}>Back</BackButton>
                                    : <DoneButton onClick={() => changeDone(myConst.URL, item.id, item, true)}>Hotovo</DoneButton>}
                                <RemoveButton onClick={() => {
                                    handleDelete(String(myConst.URL + '/' + item.id), item);
                                }}>Zmazať</RemoveButton>
                            </div>
                        </div>
                    )
                })}

                <p>Add new ToDo</p>
            </div>
            <div>
                <form className='flex text-black rounded-b-xl m-2 flex-col bg-gray-300' onSubmit={handleSubmit(onSubmit)} >
                    <Input {...register("title", { required: true })}
                        type='text'
                        placeholder='Title'
                    />
                    <TextareaAutosize
                        {...register("note")}
                        className='text-base'
                        placeholder='write notes'
                        maxRows={3} />
                    <Input type='datetime-local' {...register("date")} />
                    <Input
                        type='submit'
                        value='Pridať'
                        disableUnderline={true} />
                </form>
            </div>
        </div >
    )
}