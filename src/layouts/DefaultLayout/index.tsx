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
            <WhatasappContainer>
                <a href="https://bit.ly/rpriscila-reumato" target="_blank">
                    <WhatsappLogo size={35} weight="regular"/>
                </a>   
            </WhatasappContainer>
            <BackToTop>
                <Link activeClass="active" className="scrollLink" to="backtotop" smooth={true} spy={true} duration={250} title="Topo">
                    <ArrowCircleUp size={35} weight="regular"/>
                </Link>  
            </BackToTop>
        </LayoutContainer>
    )
}