import { dataPokemon } from "../../pages/api/request";
import Link from "next/link";

import { 
    CardBody, 
    CardContainer, 
    CardHeader, 
    CardImg, 
    CardTitle 
} from "./Card.style";
import { useEffect, useState } from "react";


const Card = ({name}) =>{

    const[idPokemon, setIdPokemon] = useState([]);
    const[pokemonType, setPokemonType] = useState([]);
    const[pokemonName, setPokemonName] = useState("");
    useEffect(()=>{
        imgsPokemon_list();


    },[]);
    
    const imgsPokemon_list = async () =>{
        const pokemons = await dataPokemon(name);
        console.log(pokemons);
        setIdPokemon(pokemons.id);
        setPokemonType(pokemons.types[0].type.name);
        setPokemonName(pokemons.name);
    }
    
    return(
        <>
            <Link href={`/pokemon/${pokemonName}`}>
                <CardContainer>
                    <CardHeader className={pokemonType}>
                        <CardTitle textColor="white" >#{idPokemon}</CardTitle>
                        <CardImg src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${idPokemon}.png`}/>
                    </CardHeader>
                    <CardBody>
                        <CardTitle>{name}</CardTitle>
                    </CardBody>
                </CardContainer>
            </Link>
        </>
    )
}


export default Card;