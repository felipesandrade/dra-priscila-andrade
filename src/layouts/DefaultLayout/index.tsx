import { Outlet } from "react-router-dom";
import { BackToTop, LayoutContainer, WhatasappContainer } from "./styles";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

import { WhatsappLogo, ArrowCircleUp, Scroll } from 'phosphor-react';

import { Link } from 'react-scroll';

export function DefaultLayout() {

    return (
        <LayoutContainer fluid={true}>
            <Header />
            {/* Renderiza as rotas e envia para o componente correto */}
            <Outlet />
            <Footer />
            <a href="https://bit.ly/rpriscila-reumato" target="_blank" title="Agende sua consulta">
                <WhatasappContainer>
                    <WhatsappLogo size={35} weight="regular"/>
                </WhatasappContainer>

            </a>   
            <Link activeClass="active" className="scrollLink" to="backtotop" smooth={true} spy={true} duration={250} href="#" title="Topo">
                <BackToTop>
                    <ArrowCircleUp size={35} weight="regular"/>
                </BackToTop>
            </Link>  
        </LayoutContainer>
    )
}