import { HeaderContainer, HeaderContent, MenuButton } from "./styles";

import logoDraRosaPriscila from '../../assets/logo-dra-rosa-priscila.svg';

import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { List, WhatsappLogo } from 'phosphor-react';

import { Button } from "../Button";

import { useState } from "react";

export function Header() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <HeaderContainer>
            <HeaderContent>
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
                    <Link onClick={() => setIsNavExpanded(false)} activeClass="active" className="scrollLink" to="about" smooth={true} spy={true} duration={250} title="Sobre mim">
                        Sobre mim
                    </Link>
                    <Link onClick={() => setIsNavExpanded(false)} activeClass="active" className="scrollLink" to="treatment" smooth={true} spy={true} duration={250} title="Reumatologia">
                        Reumatologia
                    </Link>
                    <Link onClick={() => setIsNavExpanded(false)} activeClass="active" className="scrollLink" to="consultation" smooth={true} spy={true} duration={250} title="Vantagens Consulta Particular">
                        Consulta
                    </Link>
                    <Link onClick={() => setIsNavExpanded(false)} activeClass="active" className="scrollLink" to="faq" smooth={true} spy={true} duration={250} title="Dúvidas">
                        Dúvidas
                    </Link>
                    <Link onClick={() => setIsNavExpanded(false)} activeClass="active" className="scrollLink" to="location" smooth={true} spy={true} duration={250} title="Localização">
                        Contato
                    </Link> 
                </nav>
                <a href="https://bit.ly/rpriscila-reumato" target="_blank">
                    <Button 
                        iconExists={true}
                        icon={<WhatsappLogo size={22} />}
                        children="Agendar Consulta"           
                    />
                </a>
            </HeaderContent>
        </HeaderContainer>
    )
}