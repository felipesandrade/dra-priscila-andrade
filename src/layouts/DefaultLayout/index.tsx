import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export function DefaultLayout() {
    return (
        <LayoutContainer fluid={true}>
            <Header />
            {/* Renderiza as rotas e envia para o componente correto */}
            <Outlet />
            <Footer />
        </LayoutContainer>
    )
}