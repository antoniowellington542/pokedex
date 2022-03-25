import styled from "styled-components";

export const NavbarContainer = styled.nav`
    position: absolute;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background-color: #1E90FF;
    min-width: 280px;
    box-shadow: 3px 5px 10px black;
`;

export const Logo = styled.img`
    src: ${props => props.logo};
    width: 100px;
    margin-left: 10px;
    cursor: pointer;
`;

export const Menu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-height: ${({isOpen}) => (isOpen ? "300px" : "100")};
    transition: max-height 0.3s ease-in;
    padding-right: 20px;
    @media (max-width: 768px){
        overflow: hidden;
        flex-direction: column;
        width: 100%;
    }
`;

export const MenuLogo = styled.div`
    padding: 1rem;
    display: none;
    flex-direction: column;
    color: black;
    cursor: pointer;
    @media (max-width: 768px){
        display: flex;
    }
`;

export const MenuLink = styled.a`
    padding: 1rem 2rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    font-size: 0.9rem;

    &.active{
        border-bottom: 3px solid black;
    }

    @media (max-width: 768px){
        border-bottom: 1px solid white;
    }
`;

