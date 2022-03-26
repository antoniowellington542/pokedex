import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { ListPokemons } from "./api/request.js";
import Card from "../components/Card/Card";
import Pagination from "../components/Pagination/Pagination";
import { useLoading } from "../AppContext/LoadingContext";
import { usePagination } from "../AppContext/PaginationContext.js";

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


const Pokedex = () => {

    const [pokemons, setPokemons] = useState([]);
    const {loading, showLoading, hideLoading} = useLoading();
    const {index} = usePagination();

    
    useEffect(()=>{
        showLoading();
        getPokemon();
        time();
    }, [index]);

    const time = ()=>{
        const interval = setInterval(()=>{
            clearInterval(interval)
            hideLoading();
        }, 3000);
           
    }
    const getPokemon = async () =>{
        const response = await ListPokemons(index);
        setPokemons(response);
    }

    return loading == false ?(
        <>
            
            <Box>
                {pokemons.map(pokemon =>(
                    <div key={pokemon.id}>
                        <Card name={pokemon.name}/>
                    </div>
                ))}
            </Box>
            <Pagination />
        </>
    ): null
}

export default Pokedex;