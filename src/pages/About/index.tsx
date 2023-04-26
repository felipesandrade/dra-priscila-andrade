import { AboutContainer, Doctor, Image } from "./styles";
import photo from '../../assets/img-dra-rosa-priscila-principal.png';

export function About() {
    return (
        <AboutContainer>
            <Image>
                <img src={photo} title="Foto Principal Dra Rosa Priscila" alt="Foto Principal Dra Rosa Priscila"/> 
            </Image>
            <Doctor>
                <h1>Quem é Dra. Rosa Priscila ?</h1>
                <p>Em primeiro lugar, sejam bem-vindos.</p>
                <p>Me chamo Rosa Priscila, médica graduada pela Universidade Estadual do Ceará - UECE, com
                titulo de especialista em Clínica Médica pelo Hospital Universitário Walter Cantídio e
                Reumatologia pelo Hospital Geral de Fortaleza - HGF.</p>
                <p>Sei que escolher um médico pode ser um processo difícil, mas estou aqui para 
                tornar isso mais fácil para você. Meu objetivo é criar um ambiente acolhedor e 
                amigável em que você possa se sentir confortável e seguro. Quero que você 
                se sinta à vontade para discutir todas as suas preocupações e perguntas sobre sua saúde conosco. </p>
                <p>Acredito que a saude é o bem mais valioso que alguém pode ter, e é por isso
                que durante anos me preparei para fornecer um atendimento de primeira linha,
                focado no tratamento individualizado, respeitando as crenças e enfatizando o bem-estar.</p>
                <p>Durante a consulta, o objetivo é criar um ambiente acolhedor e amigável para que você 
                possa se sentir confortável e seguro para que juntos possamos escolher o melhor tratamento 
                que mais se adapta a sua realidade.</p>
            </Doctor>
        </AboutContainer>
    )
}