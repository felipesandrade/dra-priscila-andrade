import { ButtonContainer } from "./styles";

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