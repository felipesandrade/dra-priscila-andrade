import { HeaderContainer, MenuButton } from "./styles";

import logoDraRosaPriscila from '../../assets/logo-dra-rosa-priscila.svg';

import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { List } from 'phosphor-react';

import { Button } from "../Button";
import { useState } from "react";

export function Header() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <HeaderContainer>
            <img src={logoDraRosaPriscila} alt="Nome da médica com fonte"/>
            <MenuButton>
                <List size={28} onClick={() => { setIsNavExpanded(!isNavExpanded) }}/>
            </MenuButton>
            <nav className={
                            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                           }
            >
                <NavLink to="/" title="Home">
                    Início
                </NavLink>
                <NavLink to="/sobre" title="Sobre">
                    Sobre
                </NavLink>
                <NavLink to="/reumatologia" title="Reumatologia">
                    Reumatologia
                </NavLink>
                <NavLink to="/tratamentos" title="Tratamentos">
                    Tratamentos
                </NavLink>
                {/* <NavLink to="/contato" title="Localização">
                    Contato
                </NavLink>  */}
                 <Link activeClass="active" to="location" smooth={true} spy={true} duration={250} title="Localização">
                    Contato
                </Link> 
            </nav>
            <Button />
        </HeaderContainer>
    )
}