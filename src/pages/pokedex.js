import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { ListPokemons } from "./api/request.js";

import Card from "../components/Card/Card";
import Progressbar from "../components/Progressbar/ProgressBar";
import Pagination from "../components/Pagination/Pagination.jsx";

const Box = styled.div`
    margin: 40px auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
    grid-column-gap: 3%;
    width: 90%;
    min-width: 280px;
    justify-content: space-around;
    padding: 10px;
    border-radius: 10px;
    opacity: 1;

`

const LIMIT = 28;
const TIME_LOADING = 4;

const Pokedex = () => {

    const [pokemons, setPokemons] = useState([]);
    const[loading, setLoading] = useState(true);
    const[valueBar, setValueBar] = useState(0);
    const[offset, setOffset] = useState(0);

    
    useEffect(()=>{
        setLoading(true);
        setValueBar(0);
        LoadingTimeApi("Carregando Dados", getPokemons());
        reloading(); 
    }, [offset]);

    const getPokemons = async () =>{
        const pokemons_list = await ListPokemons(offset);
        setPokemons(pokemons_list);
    }

    function LoadingTimeApi(mensagem, getApi){
        if(mensagem) return console.error(mensagem);
        getApi();
    }

    const reloading = () => {
        const interval = setInterval(()=> {
            setValueBar(oldValue => {
                const newValue = (oldValue + 20);
                    
                if(newValue > 100){
                    clearInterval(interval);
                    setLoading(false);
                }
                return newValue;
            })   
        }, TIME_LOADING * 200);
    }

    if(loading){
        return(
            <div style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap:  "10px",
                alignItems: "center",
                margin: "20px auto",
                width: "80%",
                height: "80vh",
                minWidth: "280px",
                borderRadius: "10px"
            }}>
                <img style={{borderBottom: "2px solid black"}} src="https://i.imgur.com/aMz1Qtu.gif"/>
                <Progressbar width={valueBar}/>
            </div>
        );
    }

    return(
        <>
            <Box>
                {pokemons.map(pokemon =>(
                    <div key={pokemon.id}>
                        <Card name={pokemon.name} id={pokemon.id}/>
                    </div>
                ))}
            </Box>
            <Pagination 
            limit={LIMIT} 
            total={800} 
            offset={offset} 
            setOffset={setOffset}
            />
        </>
    );
}

export default Pokedex;