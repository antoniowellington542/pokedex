import React, {useState, useEffect, createContext } from "react";

import { dataPokemon, SearchPokemon } from "../pages/api/request";

export const PokemonContext = createContext();

export default function PokemonProvider({children}){
    
    const[pokemon, setPokemon] = useState([]);
    const [name, setName] = useState([]);
    const [id, setId] = useState([])

    useEffect(()=>{
        getSearch();
    
    },[])

    const getSearch = async () =>{
        const response = await SearchPokemon();
        setPokemon(response)
        console.log(pokemon);
    }


    return(
        <PokemonContext.Provider value={[pokemon, name, id]}>
            {children}
        </PokemonContext.Provider>
    )
}