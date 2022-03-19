export const ListPokemons = async (index) =>{
    
    const listPokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=28&offset=${index}`);   
      
    const [pokemons] = await Promise.all([listPokemonsResponse]);
  
      
    const pokemonsJson = await pokemons.json();
      
    console.log(pokemonsJson.results);
      
    return pokemonsJson.results;
  }
  
  
export const dataPokemon = async (name) =>{
  
  const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  
  const [pokemon] = await Promise.all([pokemonResponse]);
  
      
  const pokemonJson = await pokemon.json();
      
  //console.log(pokemonJson);
      
  return pokemonJson;
}

export const aboutPokemon = async (id) =>{
  
  const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  
  const [pokemon] = await Promise.all([pokemonResponse]);
  
      
  const pokemonJson = await pokemon.json();
      
  //console.log(pokemonJson);
      
  return pokemonJson;
}

