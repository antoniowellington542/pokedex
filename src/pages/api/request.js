export const ListPokemons = async (index) =>{
    
    const listPokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=28&offset=${index}`);   
      
    const [pokemons] = await Promise.all([listPokemonsResponse]);
  
    const pokemonsJson = await pokemons.json();
      
    return pokemonsJson.results;
  }
  
  
export const dataPokemon = async (name) =>{
  
  const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  
  const [pokemon] = await Promise.all([pokemonResponse]);
  
      
  const pokemonJson = await pokemon.json();
      
  return pokemonJson;
}

export const aboutPokemon = async (id) =>{
  
  const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  
  const [pokemon] = await Promise.all([pokemonResponse]);
  
      
  const pokemonJson = await pokemon.json();
      
  return pokemonJson;
}

export const SearchPokemon = async () =>{
  
  const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=898&offset=0`);
  
  const [pokemon] = await Promise.all([pokemonResponse]);
  
 
  const pokemonJson = await pokemon.json();
  
  console.log(pokemonJson.results);
  return pokemonJson.results;
}


