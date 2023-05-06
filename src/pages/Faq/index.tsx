import { FaqCard, FaqContainer, FaqContent, Title } from "./styles";

export function Faq() {
    return (
        <FaqContainer>
            <Title>
                Principais dúvidas ?
            </Title>
            <FaqContent>
                <FaqCard>
                    <header>
                        Atende Plano de Saúde ? 
                    </header>
                    <span>
                       Atualmente não atendo plano, por acreditar que para manter a 
                       qualidade e trazer benefícios reais ao paciente é necessário
                       dedicar mais tempo durante a consulta e garantir um acompanhamento
                       mais próximo durtante o tratamento.
                    </span>
                </FaqCard>
                <FaqCard>
                    <header>
                        Emite Nota Fiscal ?
                    </header>
                    <span>
                        Emitimos nota fiscal para todos os pacientes, facilitando o processo
                        de solicitação de reembolso e declaração do imposto de renda.
                    </span>
                </FaqCard>
                <FaqCard>
                    <header>
                        Quais as formas de pagamento ?
                    </header>
                    <span>
                        Atualmente a consulta pode ser paga em dinheiro, pix e cartão de 
                        crédito em até 3x com juros.
                    </span>
                </FaqCard>
                <FaqCard>
                    <header>
                        Qual o valor da consulta ?
                    </header>
                    <span>
                        Atualmente a consulta presencial e a teleconsulta custam 
                        R$ 350,00 reais com direito a retorno e30 dias.
                    </span>
                </FaqCard>
                <FaqCard>
                    <header>
                        Qual o tempo de duração da consulta?
                    </header>
                    <span>
                        A consluta dura em torno de 60 minutos, onde farei todo o processo
                        de escuta das queixas, alinhamento de expectativas,
                        exame físico, solicitação e análise de exames, definição da 
                        melhor opção de tramamento, e por fim orientação e emissão de documentação 
                        médica, caso necessário.
                    </span>
                </FaqCard>
                <FaqCard>
                    <header>
                        Como devo me preparar para consulta?
                    </header>
                    <span>
                        A consluta dura em torno de 60 minutos, onde farei todo o processo
                        de escuta das queixas, alinhamento de expectativas,
                        exame físico, solicitação e análise de exames, definição da 
                        melhor opção de tramamento, e por fim orientação e emissão de documentação 
                        médica, caso necessário.
                    </span>
                </FaqCard>
            </FaqContent>
        </FaqContainer>
    )
}