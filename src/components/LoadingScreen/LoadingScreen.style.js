import styled, {keyframes} from "styled-components";

export const ContainerLoadingScreen = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: 100vh;
    min-width: 280px;
`
export const LoadingImage = styled.img`
    border-bottom: 1px solid black;
    width: 250px;
    min-width: 100px;
    min-height: 100px;
`

export const ContainerLoadingBar = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`;


export const ContainerBar = styled.div`
    padding: 2px;
    width: 20%;
    height: 25px;
    border: 2px solid black;
    border-radius: 20px;
`
const ld = keyframes`
    from {width: 0%;}
    to{width: 100%;}
`

export const Bar = styled.div`
    height: 100%;
    background-color: #B0C4DE;
    border-radius: 20px;
    animation: ${ld} 4s forwards cubic-bezier(0,0,0,0);
    text-align: center;
    color: black;

`;

const animateOpacity = keyframes`
    0%, 100%{
        opacity: 1;
    }
    50%{
        opacity: 0;
    }
`

export const Text = styled.p`
    font-size: 40px;
    color: black;
    animation: ${animateOpacity} 2s infinite;
`

