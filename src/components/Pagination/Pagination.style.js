import styled from "styled-components";

export const PaginationContainer = styled.div`
position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    margin: auto;
`

export const ListPagination = styled.ul`
position: absolute;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 70%;
`

export const ListItem = styled.li`
    padding-left: 5px;
`

export const ButtonPagination = styled.button`
    background-color: white;
    border: none;
    border-radius: 4px;
    color: black;
    font-weight: bold;
    width: 30px;
    height: 30px;
    cursor: pointer;

    &:hover{
        transform: scale(1.2);
    }

    
    &.active{
        outline: none;
        background-color: #1E90FF;
        transform: scale(1.2);
    }
    
`
export const ButtonController = styled.button`
    background-color: #C0C0C0;
    border: none;
    border-radius: 4px;
    color: black;
    font-weight: bold;
    height: 30px;
    cursor: pointer;
  
`