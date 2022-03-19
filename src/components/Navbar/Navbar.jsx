import React, { useState } from "react";
import Link from 'next/link';
import {useRouter} from "next/router";
import {VscMenu} from 'react-icons/vsc';
import {
    NavbarContainer, 
    Logo, 
    Menu, 
    MenuLink,
    MenuLogo 
} from "../../../styles/Navbar.style";
import SearchBar from "../SearchBar/SearchBar";


const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    return(
        <NavbarContainer>
            <Link href="/">
                <Logo src="https://cdn-0.imagensemoldes.com.br/wp-content/uploads/2020/04/Pok%C3%A9mon-Logo-PNG-1024x768.png" />
            </Link>
            <MenuLogo onClick={()=> setIsOpen(!isOpen)}>
                <VscMenu/>
            </MenuLogo>
            <Menu isOpen={isOpen}>
                <MenuLink className={router.asPath === "/" ? "active" : ""}>
                    <Link href="/">Home</Link>
                </MenuLink>
                <MenuLink className={router.asPath === "/pokedex" ? "active" : ""}>
                    <Link href="/pokedex">Pokedex</Link>
                </MenuLink>
                <SearchBar/>
            </Menu>
        </NavbarContainer>
    );
}

export default Navbar;