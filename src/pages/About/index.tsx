import { Element } from "react-scroll";
import { AboutContainer, 
         Content, 
         DoctorContainer, 
         ImageContainer, 
         SkillsContainer, 
         Title } from "./styles";
import { CheckSquare } from 'phosphor-react';
import photo from '../../assets/img-dra-rosa-priscila-principal.png';

export function About() {
    return (
        <Element name="about">
            <AboutContainer>
                <Title>
                    <h1>Quem é Dra. Rosa Priscila ?</h1>
                </Title>
                <Content>
                    <ImageContainer>
                        <img src={photo} title="Foto Principal Dra Rosa Priscila" alt="Foto Principal Dra Rosa Priscila"/> 
                    </ImageContainer>
                    <DoctorContainer>
                        <p><span>Em primeiro lugar, sejam bem-vindos.</span></p>
                        <p>
                            <span>
                                Sei que escolher um médico pode ser um processo difícil, mas estou aqui para 
                                tornar isso mais fácil para você. Meu objetivo é criar um ambiente acolhedor e 
                                amigável em que você possa se sentir confortável e seguro. Quero que você 
                                se sinta à vontade para discutir todas as suas preocupações comigo. 
                            </span>
                        </p>
                        <p>
                            <span>
                                Acredito que a saude é o bem mais valioso que alguém pode ter, e é por isso
                                que durante anos me preparei para fornecer um atendimento de primeira linha,
                                focado no tratamento individualizado, respeitando as crenças e enfatizando o bem-estar.
                            </span>
                        </p>
                        <p>
                            <span>
                                Durante a consulta, o objetivo é criar um ambiente acolhedor e amigável para que você 
                                possa se sentir confortável e seguro para que juntos possamos escolher o tratamento 
                                que mais se adapta a sua realidade.
                            </span>
                        </p>
                    </DoctorContainer>
                </Content>
                <SkillsContainer>
                    <ul>
                        <li>
                            <span><CheckSquare size={32} weight="fill"/></span>
                            <span>Médica graduada pela Universidade Estadual do Ceará</span>
                        </li>
                        <li>
                            <span><CheckSquare size={32} weight="fill"/></span>
                            <span>Residência em Clínica Médica pela Hospital Universitário Walter Cantídio</span>
                        </li>
                        <li>
                            <span><CheckSquare size={32} weight="fill"/></span>
                            <span>Residência em Reumatologia pelo Hospital Geral de Fortaleza</span>
                        </li>
                    </ul>

                </SkillsContainer>
            </AboutContainer>
        </Element>
    )
}