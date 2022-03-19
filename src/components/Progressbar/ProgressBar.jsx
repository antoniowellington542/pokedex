import styled from "styled-components";

const Container = styled.div`
    border: 1px solid black;
    width: 20%;
    height: 20px;
`;
const LoadingBar = styled.div`
    width: ${props => props.w};
    height: 100%;
    background-color: black;
`;

const Progressbar = ({value, max, color, width}) =>{
        return(
            <Container>
                <LoadingBar w={`${width}%`}/>
            </Container>
        )
}

export default Progressbar;

