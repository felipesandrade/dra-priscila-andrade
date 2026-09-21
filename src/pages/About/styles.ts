import styled from 'styled-components';

export const AboutContainer = styled.div`
    width: 100%;

    max-width: 1120px;

    margin:  0 auto;
    /* padding: 0 1.5rem; */
    
    padding: 10rem 1rem 5rem;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    gap: 2rem;

    //Empilha os elementos a medida que o tamanho da tela vai reduzindo.
    @media(max-width: 768px) {
        flex-direction: column;
        height: auto;
    }
`

export const Title = styled.h1`
    font-weight: 600;
    text-align: center;
    
    color: ${(props) => props.theme['rose-gold-700']};
`

export const SubTitle = styled.h6`
    font-weight: 600;
    text-align: center;

    color: ${(props) => props.theme['gray-500']};
`

export const Content = styled.div`
    width: calc(100% - 160px);

    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;
    //max-width: 1120px;
    margin: 0 auto 0 auto;
    padding: 0;


     //Empilha os elementos a medida que o tamanho da tela vai reduzindo.
    @media(max-width: 768px) {
        flex-direction: column;
        text-align: center;
        width: auto;
        height: auto;
    }
    
`

export const ImageContainer = styled.div`
    flex: 1;
    min-width: 340px;        /* Ocupa a largura total disponível do carrossel/grid */
    height: 400px;           /* Altura fixa controlada para não pixelar */
    border-radius: 8px;
    overflow: hidden;
    //margin: 0 auto;          /* Centraliza o contêiner na tela se ela for maior que 1300px */
    position: relative;      /* Cria um contexto de renderização isolado */
    
    /* Corrige bugs de renderização de borda arredondada + overflow no Safari/Chrome */
    -webkit-mask-image: -webkit-radial-gradient(white, black);  

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;   /* PREENCHE o espaço cortando as sobras sem distorcer os pixels */
        object-position: center top;

        //image-rendering: auto; /* Mantém a suavização padrão do navegador */
         /* Força o navegador a recalcular a imagem gigante com foco na nitidez */
        image-rendering: -webkit-optimize-contrast; 
        image-rendering: high-quality; /* Suporte para navegadores modernos */

        /* Transições de efeito de zoom */
        -webkit-transition: -webkit-transform .4s ease-in-out;
        transition: transform .4s ease-in-out;

          /* Melhora a suavidade de imagens rotacionadas/ampliadas no hardware */
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
    }

    /* Efeito opcional: dá um leve zoom na imagem quando passa o mouse por cima do contêiner */
    img:hover {
        -webkit-transform: scale(1.8);
        transform: scale(1.8);
    }

    @media(max-width: 768px) {
        flex-direction: column;
        width: 100%;
        min-width: 100%;
        height: 350px;
    }
    


`

export const DoctorContainer = styled.div`
    font-size: 1.125rem;
    font-weight: 300;
    text-align: justify;
    
    color: ${(props) => props.theme['gray-500']};

    //Empilha os elementos a medida que o tamanho da tela vai reduzindo.
    @media(max-width: 768px) {
        /* font-size: 5vw; */
        line-height: 2rem;
        width: auto;
        height: auto;
    }
`

export const SkillsContainer = styled.div`
    width: calc(100% - 80px - 80px);

    margin:  0 auto;

    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;

    //Empilha os elementos a medida que o tamanho da tela vai reduzindo.
    @media(max-width: 768px) {
        width: auto;
        height: auto;
    }
`
export const SkillCard = styled.div`
    border-radius: 8px;

    padding: 1.5rem;

    background: ${(props) => props.theme['rose-gold-75']};

    header {
        display: flex;
        align-items: center;
        gap: 1rem;

        color: ${(props) => props.theme['gray-500']};

        svg {
            min-width: 32px;
            color: ${(props) => props.theme['rose-gold-700']};
        }
    }

    strong {
        display: block;
        font-size: 1.125rem;
        font-weight: 300;
    }
`