import { Button, HomeContainer, Hometitle, ImageContainer, ImagePokemon, TextContainer } from "../../styles/Home.style";
import Link from 'next/link';


export default function Homes() {

  return (
    <HomeContainer>
      <TextContainer>
        <Hometitle>Apresento a voce a melhor e mais completa <b>pokedex</b> do mundo</Hometitle>
        <Link href="/pokedex">
          <Button>Conhecer Pokemons</Button>
        </Link>
      </TextContainer>
      <ImageContainer>
        <ImagePokemon/>
      </ImageContainer>
    </HomeContainer>
  );
}
