import styled from "styled-components";

export const PokemonContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    min-width: 280px;
    border-radius:0px 0px 0px 0px;
    padding-top: 60px;
    text-align: center;
    &.normal {
        background-color: #6d6d4e;
    }
    &.fire {
        background-color: #e20707;
      }
    &.water {
        background-color: #628ef5;
      }
    &.electric {
        background-color: #eed058;

      }
    &.grass {
        background-color: #4e8234;

      }
    &.ice {
        background-color: #a2bdbd;

      }
    &.ground {
        background-color: #5a4c24;

      }
    &.flying {
        background-color: #6d5e9c;

      }
    &.ghost {
        background-color: #493963;

      }
    &.rock {
        background-color: #786824;

      }
    &.fighting {
        background-color: #7d1f1a;

      }
    &.poison {
        background-color: #682a68;

      }
    &.psychic {
        background-color: #a13959;

      }
    &.bug {
        background-color: #6d7815;

      }
    &.dark {
        background-color: #49392f;

      }
    &.steel {
        background-color: #787887;

      }
    &.dragon {
        background-color: #4924a1;

      }
    &.fairy {
        background-color: #fa58f4;

    }
`

export const PokemonHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40%;
`

export const PokemonImage = styled.img`
    display: flex;
    width: 300px;
    src: ${ props => props.img};
`

export const PokemonMain = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 20px 20px 0px 0px;
    background-color: white;

    @media (max-width: 768px){
      flex-direction: column;
    }
`

export const PokemonStats = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 80%;

    @media (max-width: 768px){
      width: 80%;
    }
`
export const ListStats = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: none;
    width: 100%;
    padding: 10px;
    li{
        display: flex;
        justify-content: right;
        text-align: right;
        padding-top: 20px;
        width: 70%;
        font-size: 1rem;
        text-transform: uppercase;
    }
`

export const StatsBar  = styled.progress`
    width: 50%;
    padding-left: 10px;
    padding-right: 10px;
    -webkit-appearance: none;
    &::-webkit-progress-bar{
        background-color: white;
        border: 2px solid ${({value}) => (value > 50 ? "green" : "orange")};;
        border-radius: 10px;
    }

    &::-moz-progress-bar {  
        background: black;
        border-radius: 10px;
    }

    &::-webkit-progress-value {
      border-radius: 6px;
      background: ${({value}) => (value > 50 ? "green" : "orange")};

    }

    @keyframes progress {
      0%{
        width: 0%;
      }
      100%{
        width: 100%;
      }
    }
      
`

export const AtributesPokemon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 80%;
`
