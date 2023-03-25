import { HeaderContainer, MenuButton } from "./styles";

import logoDraRosaPriscila from '../../assets/logo-dra-rosa-priscila.svg';

import { NavLink } from 'react-router-dom';
import { List } from 'phosphor-react';

import { Button } from "../Button";

export function Header() {
    return (
        <HeaderContainer>
            <img src={logoDraRosaPriscila} alt="Nome da médica com fonte"/>
            <MenuButton>
                <List size={28} />
            </MenuButton>
            <nav>
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
                <NavLink to="/contato" title="Contato">
                    Contato
                </NavLink>
            </nav>
            <Button />
        </HeaderContainer>
    )
}