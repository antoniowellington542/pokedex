import { useEffect, useState } from "react";
import {useRouter} from "next/router";
import { aboutPokemon } from "../api/request";
import { 
    AtributesPokemon, 
    ListStats, 
    PokemonContainer, 
    PokemonHeader, 
    PokemonImage, 
    PokemonMain, 
    PokemonStats, 
    StatsBar 
} from "../../../styles/Pokemon.style";
import { useLoading } from "../../AppContext/LoadingContext";

const Pokemon = () =>{

    const[pokemon, setPokemon] = useState([]);
    const[headerColor, setHeaderColor] = useState([]);
    const {loading, showLoading, hideLoading} = useLoading();

    const router = useRouter();
    const {PokemonName} = router.query;

    useEffect(()=>{
        getPokemon();
        showLoading();
        time();
    }, [router]);
    
    const time = ()=>{
        const interval = setInterval(()=>{
            clearInterval(interval)
            hideLoading();
        }, 3000);
    }
    const getPokemon = async () =>{
        const {
            id,
            name,
            weight,
            height,
            stats,
            types
        }= await aboutPokemon(PokemonName);

        setPokemon({
            id,
            name,
            weight: weight / 10 + 'kg',
            height: height / 10 + 'm',
            stats : {
                hp: stats[0].base_stat,
                attack: stats[1].base_stat,
                defense: stats[2].base_stat,
                especial_attack: stats[3].base_stat,
                especial_defense: stats[4].base_stat,
                speed: stats[5].base_stat,
            },
        });
        setHeaderColor(types[0].type.name);
    }

    return loading == false ?(
        <>
            <PokemonContainer className={headerColor}>
                <PokemonHeader>
                    <PokemonImage src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} />
                </PokemonHeader>
                <h1 style={{
                    color: "white",
                    textTransform: "capitalize"
                }}>{pokemon.name}</h1>
                <PokemonMain>
                    <AtributesPokemon>
                        <ListStats>
                            <li>ID #{pokemon.id}</li>
                            <li>Weight: {pokemon.weight}</li>
                            <li>Height: {pokemon.height}</li>
                        </ListStats>
                    </AtributesPokemon>
                </PokemonMain>
            </PokemonContainer>
        </>
    ): null
}

export default Pokemon;