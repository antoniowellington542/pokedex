import styled from "styled-components";


export const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 800px;
  margin: auto;
  @media (max-width: 768px){
    margin-top: 100px;
    flex-direction: column;
  }
`

export const TextContainer = styled.div`
    width: 60%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Hometitle = styled.div`
    max-width: 800px;
    max-height: 500px;
    font-size: 3rem;
    letter-spacing: 4px;

`

export const Button = styled.button`
    background-color: #20B2AA;
    width: 150px;
    height: 40px;
    font-family: Helvetica, sans-serif;
    font-size: 0.9rem;
    color: black;
    border: none;
    border-radius: 3px;
    margin-top: 5px;
    cursor: pointer;
`

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 40%;

    @media (max-width: 768px){
      width: 200px;
      margin-top: 50px;
    }

`

export const ImagePokemon = styled.div`
    width: 100%;
    height: 500px;
    background-image: url("https://imagensemoldes.com.br/wp-content/uploads/2020/04/Ash-Pok%C3%A9mon-PNG-540x1024.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    
`

export const SearchBox = styled.input`
  width: 50%;
  height: 8%;
  border-radius: 10px;
  border: none;
  font-size: 2rem;
  padding: 10px;
  &:focus{
    outline: 0;
  }
`