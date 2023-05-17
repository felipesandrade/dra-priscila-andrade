
import { ConsultaionContainer, 
        Title, 
        BeneftisContent, 
        BenefitCard} from "./styles";

import { Calendar, 
        KeyReturn, 
        ClockAfternoon, 
        Question,
        Receipt } from 'phosphor-react';

export function Consultaion() {
    return (
        <ConsultaionContainer>
            <Title>
                O que esperar da Consulta Particular ?
            </Title>
            <BeneftisContent>
                <BenefitCard>
                    <header>
                        <Calendar size={32} weight="fill" />
                    </header>
                    <strong>
                        Agendamento facilitado
                    </strong>
                </BenefitCard>
                <BenefitCard>
                    <header>
                        <ClockAfternoon size={32} weight="fill" />
                    </header>
                    <strong>
                        Mais tempo
                    </strong>
                </BenefitCard>
                <BenefitCard>
                    <header>
                        <KeyReturn size={32} weight="fill" />
                    </header>
                    <strong>
                        Retorno garantido
                    </strong>
                </BenefitCard>
                <BenefitCard>
                    <header>
                        <Question size={32} weight="fill" />
                    </header>
                    <strong>
                        Suporte via Whatsapp
                    </strong>
                </BenefitCard>
                <BenefitCard>
                    <header>
                        <Receipt size={32} weight="fill" />
                    </header>
                    <strong>
                        Nota Fiscal
                    </strong>
                </BenefitCard>
            </BeneftisContent>
        </ConsultaionContainer>
    )
}