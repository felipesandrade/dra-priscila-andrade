import { ButtonContainer } from "./styles";
import { IconContext, WhatsappLogo } from 'phosphor-react';

interface ButtonProps {
    iconExists: boolean;
    icon?: string;
    className?: any;
    children:string;
}

export function Button({ iconExists, icon, className, children }: ButtonProps) {
    return (
        <ButtonContainer className={className}>
            {iconExists === false ? icon : <WhatsappLogo size={22} />}                    
            <span>{children ? children : "Agendar consulta"}</span>
        </ButtonContainer>
    )
}