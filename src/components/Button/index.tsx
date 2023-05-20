import { ButtonContainer } from "./styles";
import { IconContext, WhatsappLogo } from 'phosphor-react';

interface ButtonProps {
    iconExists: boolean;
    icon?: any;
    className?: any;
    children:string;
}

export function Button({ iconExists, icon, className, children }: ButtonProps) {
    return (
        <ButtonContainer className={className}>
            {iconExists === true ? icon : ""}                    
            <span>{children}</span>
        </ButtonContainer>
    )
}