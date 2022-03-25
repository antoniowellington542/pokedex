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
    top: 100%;
    left: 10%;
    text-align: center;
    
    width: 85%;
    max-height: 300px;  
    background-color: white;
    color: black;
    overflow: auto;
    border-radius: 0rem 0rem 2rem 2rem;

    border-right: 1px solid black;
    border-left: 1px solid black;
    border-bottom: ${props => (props.barOpened && props.show != "" ? "1px solid black": null)};
    
    div{
        display: flex;
        justify-content: center;
        align-items: center;
        border-bottom: 1px solid black;
        height: 80px;
        background-color: white;
    }
`;

