import styled from "styled-components";

export const SearchForm = styled.form`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => (props.barOpened ? "white" : "")};
    border-radius: 2rem;
    width: ${props => (props.barOpened ? "20rem" : "3.2rem")};
    transition: width 500ms cubic-bezier(0.645, 0.045, 0.355, 1);
    margin-left: 20px;
`;

export const SearchInput = styled.input`
    font-size: 14px;
    background-color: transparent;
    width: ${props => (props.barOpened ? "100%" : "0%")};;
    border: none;
    margin-left: ${props => (props.barOpened ? "1rem" : "0rem")};
    transition: width 500ms cubic-bezier(0.645, 0.045, 0.355, 1);
    &:focus,
    &:active {
        outline: none;
    }
    &::placeholder {
        color: black;
    }
`;

export const SearchButton = styled.button`
    width: 3.5rem;
    height: 3rem;
    pointer-events: ${props => (props.barOpened ? "auto" : "none")};
    cursor: ${props => (props.barOpened ? "pointer" : "none")};
    background-image: url("https://www.purarteadesivos.com.br/wp-content/uploads/2017/04/Pok%C3%A9mon-go-300x300.png");
    background-size: cover;
    border-radius: 1rem;
    border: none;
    background-color: transparent;

`;

export const SearchResult = styled.div`
    position: absolute;
    top: -90%;
    left: 10%;
    text-align: center;
    transform: translateY(90%);
    border-top: 1px solid black;
    width: 85%;
    height: ${props=>(props.show != "" ? "100px": "0px")};
    background-color: white;
    color: black;

    div{
        position: absolute;
        margin-top: 1px;
        border: 2px solid red;
    }
`;

