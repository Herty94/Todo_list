

import { Box, Button, ListItemSecondaryAction, Slider, Stack } from "@mui/material";
import styled from "styled-components";
import ToDoItem from "./ToDoItem";
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import React, { useEffect, useState } from 'react'
import { CatchingPokemonTwoTone } from "@mui/icons-material";
import { useFetch } from "../mockFunctions";


export default function List() {

    // geting data from mockapi.io using custom hook 
    const { data: items, loading } = useFetch('https://61ae505ba7c7f3001786f792.mockapi.io/item')
    const Title = styled.h1`
      color: #1f4fa7
    `;


    return (
        <div className='border-4 border-green-400'>
            <Title>Názov</Title>
            {loading && <p>Loading data ...</p>}
            {items && items.map((item: any) => {
                return <ToDoItem
                    title={item.title}
                    note={item.note}
                    date={item.date}
                    time={item.time}
                    done={item.done}
                    key={item.id} />
            })}
            <Button>Pridať</Button>
        </div>
    )
}