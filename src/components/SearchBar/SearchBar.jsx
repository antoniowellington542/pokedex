import {useState, useContext } from "react"
import { PokemonContext} from "../../AppContext/PokemonContext";
import Link from "next/link";
import { 
  SearchButton,
  SearchForm, 
  SearchInput, 
  SearchResult 
} from "./SearchBar.style";

const SearchBar = () =>{
  const[input, setInput] = useState("");
  const [barOpened, setBarOpened] = useState(false);
  const [listPokemons, setListPokemons] = useContext(PokemonContext)
  
  const onFormSubmit = e => {
    // When form submited, clear input, close the searchbar and do something with input
    e.preventDefault();
    setInput("");
    setBarOpened(false);
    // After form submit, do what you want with the input value

    console.log(`Form was submited with input: ${input}`);
  };

  return(
    <SearchForm
      barOpened={barOpened}
        onClick={() => {
          // When form clicked, set state of baropened to true and focus the input
          setBarOpened(true);
        }}
        // on focus open search bar
        onFocus={() => {
          setBarOpened(true);
        }}
        // on blur close search bar
        onBlur={() => {
          setBarOpened(false);
        }}
        // On submit, call the onFormSubmit function
        onSubmit={onFormSubmit}
    >
      <SearchButton type="submit" barOpened={barOpened}/>
      <SearchInput
        onChange={e => setInput(e.target.value)}
        value={input}
        barOpened={barOpened}
        placeholder="Procure por um Pokemon..."
      />
      <SearchResult barOpened={barOpened} show={input} >
      {listPokemons.map(p=>(
        p.name.startsWith(input) && input != "" && barOpened ? 
        <div>
          <Link href={`/pokemon/${p.name}`}>{p.name}</Link>
        </div>
        : null
      ))}
      </SearchResult>
    </SearchForm>
  );
}

export default SearchBar;