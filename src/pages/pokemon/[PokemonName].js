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
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";

const Pokemon = () =>{

    const[pokemon, setPokemon] = useState([]);
    const[headerColor, setHeaderColor] = useState([]);
    const[loading, setLoading] = useState(true);
    const[timeLoading, setTimeLoading] = useState(5);
    const[valueBar, setValueBar] = useState(0);

    const router = useRouter();
    const {PokemonName} = router.query;
    useEffect(()=>{
        getPokemon();
        setLoading(true);
        setValueBar(0);
        const interval = setInterval(()=> {
            setValueBar(oldValue => {
                const newValue = (oldValue + 20);
                if(newValue > 100){
                    clearInterval(interval);
                    setLoading(false);
                }
                console.log(newValue);
                return newValue;
            })
            
        }, 700);

    }, [router]);
    
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

    if(loading){
        return(
            <LoadingScreen width={valueBar}/>
        );
    }

    return(
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
                <PokemonStats>
                    <ListStats>
                        <li>HP{<StatsBar value={pokemon.stats.hp} max="200" />}{pokemon.stats.hp}</li>
                        <li>Attack{<StatsBar value={pokemon.stats.attack} max="200" />}{pokemon.stats.attack}</li>
                        <li>Defense{<StatsBar value={pokemon.stats.defense} max="200" />}{pokemon.stats.defense}</li>
                        <li>Sp. Attack{<StatsBar value={pokemon.stats.especial_attack} max="200" />}{pokemon.stats.especial_attack}</li>
                        <li>Sp. Defense{<StatsBar value={pokemon.stats.especial_defense} max="200" />}{pokemon.stats.especial_defense}</li>
                        <li>Speed{<StatsBar value={pokemon.stats.speed} max="200" />}{pokemon.stats.speed}</li>
                    </ListStats>
                </PokemonStats>
            </PokemonMain>
        </PokemonContainer>
    );
}

export default Pokemon;