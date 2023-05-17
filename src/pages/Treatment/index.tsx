import { Content } from "../About/styles";
import { 
    TreatmentContainer, 
    Title, 
    TreatmentContent,
    TreatmentCard} from "./styles";

export function Treatment(){
    return (
        <TreatmentContainer>
            <Title>Por que procurar o reumatologista ?</Title>
            <Content>
                <span>
                    A reumtologia é uma especialidade médica dedicada a investigação
                    diagnóstico e tratamento de mais de 200 doenças diferentes que 
                    podem causar sintomas reumáticos.
                    Por padrão, essas doenças quase que inevitavelmente se apresentam 
                    por meio de dores nas articulações, músculos e tendões.
                    Dessa forma, o papel principal do reumatologista é identificar a causa
                    desses sintomas e oferecer o melhor tratamento possível visando
                    melhorar a qualidade de vida dos pacientes.
                    Conheça as principais condições tratadas pelo reumatologista:
                </span>
            </Content>
            <TreatmentContent>
                <TreatmentCard>
                    <span>Imagem 01</span>
                </TreatmentCard>
                <TreatmentCard>
                    <span>Imagem 01</span>
                </TreatmentCard>
                <TreatmentCard>
                    <span>Imagem 01</span>
                </TreatmentCard>
                <TreatmentCard>
                    <span>Imagem 01</span>
                </TreatmentCard>
            </TreatmentContent>
        </TreatmentContainer>
    )
}