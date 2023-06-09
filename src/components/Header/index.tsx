import { HeaderContainer, HeaderContent, MenuButton, Wrapper } from "./styles";

import logoDraRosaPriscila from '../../assets/logo-dra-rosa-priscila.svg';

import { 
        NavLink,
        useLocation,
        Link as LinkRouter
       } from 'react-router-dom';
import {   
        Element, 
        Link as LinkScroll} from 'react-scroll';
import { List, WhatsappLogo } from 'phosphor-react';

import { Button } from "../Button";

import { useState } from "react";

export function Header() {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <Element name="backtotop">
            <HeaderContainer>
                <HeaderContent>
                    <Wrapper>
                        <NavLink to="/" title="Início">
                            <img src={logoDraRosaPriscila} alt="Nome da médica com fonte"/>
                        </NavLink>
                        <MenuButton title="Botão menu">
                            <List size={28} onClick={() => { setIsNavExpanded(!isNavExpanded) }} />
                        </MenuButton>
                    </Wrapper>
                    <nav className={
                                    isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
                                }
                    >
                        <NavLink to="/" title="Início">
                            Início
                        </NavLink>
                        <NavLink to="/sobre" title="Início">
                            Sobre mim
                        </NavLink>
                        <LinkScroll onClick={() => setIsNavExpanded(false)} activeClass="active" className="scrollLink" to="about" smooth={true} spy={true} duration={500} href="#sobre" title="Sobre mim">
                            Sobre mim
                        </LinkScroll>
                        <LinkScroll onClick={() => setIsNavExpanded(false)} activeClass="active" className="scrollLink" to="treatment" smooth={true} spy={true} duration={500} href="#reumatologia" title="Reumatologia">
                            Reumatologia
                        </LinkScroll>
                        <LinkScroll onClick={() => setIsNavExpanded(false)} activeClass="active" className="scrollLink" to="consultation" smooth={true} spy={true} duration={500} href="#consulta" title="Vantagens Consulta Particular">
                            Consulta
                        </LinkScroll>
                        <LinkScroll onClick={() => setIsNavExpanded(false)} activeClass="active" className="scrollLink" to="faq" smooth={true} spy={true} duration={500} href="#faq" title="Dúvidas">
                            Dúvidas
                        </LinkScroll>
                        <LinkScroll onClick={() => setIsNavExpanded(false)} activeClass="active" className="scrollLink" to="location" smooth={true} spy={true} duration={500} href="#contato" title="Localização">
                            Contato
                        </LinkScroll>                             
                    </nav>
                    <a href="https://bit.ly/rpriscila-reumato" target="_blank" title="Agende sua consulta">
                        <Button 
                            iconExists={true}
                            icon={<WhatsappLogo size={22} />}
                            children="Agendar Consulta"           
                        />
                    </a>
                </HeaderContent>
            </HeaderContainer>
        </Element>
    )
}