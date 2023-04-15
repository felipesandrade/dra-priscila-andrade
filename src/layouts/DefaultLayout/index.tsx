import { Outlet } from "react-router-dom";
import { LayoutContainer } from "./styles";

import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Location } from "../../components/Location";

export function DefaultLayout() {
    return (
        <LayoutContainer>
            <Header />
            {/* Renderiza as rotas e envia para o componente correto */}
            <Outlet />
            <Location />
            <Footer />
        </LayoutContainer>
    )
}