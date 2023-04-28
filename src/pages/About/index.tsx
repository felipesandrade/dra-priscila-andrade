import { AboutContainer, 
         Content, 
         DoctorContainer, 
         ImageContainer, 
         Title } from "./styles";
import photo from '../../assets/img-dra-rosa-priscila-principal.png';
import { Element } from "react-scroll";

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
                                se sinta à vontade para discutir todas as suas preocupações conosco. 
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
            </AboutContainer>
        </Element>
    )
}