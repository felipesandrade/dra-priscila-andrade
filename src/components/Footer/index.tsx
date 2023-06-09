import { 
    FooterContainer, 
    Copyright, 
    SocialMedia,
    FooterContent} from "./styles";

import { InstagramLogo } from 'phosphor-react';

export function Footer() {
    return (
        <FooterContainer>
            <FooterContent>
                <SocialMedia>
                    <a href="https://instagram.com/rosapriscila.reumato?igshid=YmMyMTA2M2Y=" title="Ícone Instagram" target="_blank">
                        <InstagramLogo size={35} weight="fill" />
                    </a>
                </SocialMedia>
                <Copyright>
                    Copyright © 2023 Dra Rosa Priscila. Todos os Direitos Reservados.
                </Copyright>
            </FooterContent>
        </FooterContainer>
    )
}