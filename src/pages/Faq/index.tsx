import { Element } from "react-scroll";
import { FaqCard, FaqContainer, FaqContent, Title } from "./styles";

export function Faq() {
    return (
        <Element name="faq">
            <FaqContainer>
                <Title>
                    Principais dúvidas ?
                </Title>
                <FaqContent>
                    <FaqCard>
                        <header>
                            <strong>Atende Plano de Saúde ? </strong>
                        </header>
                        <span>
                        Atualmente não atendo plano, por acreditar que para manter a 
                        qualidade e trazer benefícios reais ao paciente é necessário
                        dedicar mais tempo durante a consulta e garantir um acompanhamento
                        mais próximo durante o tratamento.
                        </span>
                    </FaqCard>
                    <FaqCard>
                        <header>
                            <strong>Emite Nota Fiscal ?</strong>
                        </header>
                        <span>
                            Emitimos nota fiscal para todos os pacientes, facilitando o processo
                            de solicitação de reembolso e declaração do imposto de renda.
                        </span>
                    </FaqCard>
                    <FaqCard>
                        <header>
                            <strong>Quais as formas de pagamento ?</strong>
                        </header>
                        <span>
                            Atualmente a consulta pode ser paga em dinheiro, pix e cartão de 
                            crédito.
                        </span>
                    </FaqCard>
                    <FaqCard>
                        <header>
                            <strong>Qual o valor da consulta ?</strong>
                        </header>
                        <span>
                            Atualmente a consulta presencial e a teleconsulta custam 
                            R$ 400,00 reais com direito a retorno em 30 dias.
                        </span>
                    </FaqCard>
                    <FaqCard>
                        <header>
                            <strong>Qual o tempo de duração da consulta ?</strong>
                        </header>
                        <span>
                            A consulta dura em torno de 40 minutos, onde farei todo o processo
                            de escuta das queixas, alinhamento de expectativas,
                            exame físico, solicitação e análise de exames, definição da 
                            melhor opção de tratamento, e por fim orientação e emissão de documentação 
                            médica, caso necessário.
                        </span>
                    </FaqCard>
                    <FaqCard>
                        <header>
                            <strong>Como devo me preparar para consulta?</strong>
                        </header>
                        <span>
                            Use roupas leve para facilitar o seu exame físico, leve seus exames
                            (de sangue e imagem, se tiver), faça uma lista de remédios, vitaminas
                            ou suplementos que faz uso regular, anote suas queixas (quando iniciaram os
                            sintomas, fatores de melhora ou piora).
                        </span>
                    </FaqCard>
                </FaqContent>
            </FaqContainer>
        </Element>
    )
}