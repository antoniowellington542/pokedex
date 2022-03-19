import styled from "styled-components";

export const CardContainer = styled.div`
    width: 200px;
    height: 300px;
    background-color: white;
    border-radius: 10px 10px;
    margin: auto;
    box-shadow: 0 1px 2px 0px rgba(0, 0, 0, 0.1);
    transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    margin-top: 80px;
    cursor: pointer;

    &:hover{
      transform: scale(1.2);
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.3);
      transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
    }


`
export const CardHeader = styled.div`
    width: 100%;
    height: 60%;
    border-radius: 10px 10px 0px 0px;

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
export const CardImg = styled.img`
display: flex;
    width: 200px;
    height: 200px;
    src: ${ props => props.imgPokemon};
`

export const CardTitle = styled.h1`
    color: ${props => props.textColor};
    font-size: 1.5rem;
    text-align: center;
    text-transform: uppercase;
    font-family: 'Courier New', Courier, monospace;
` 

export const CardBody = styled.div`
    color: gray;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 30%;
    margin: 30px auto auto auto;
`

