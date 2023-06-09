import styled from 'styled-components';

export const AboutContainer = styled.div`
    width: 100%;

    max-width: 1120px;

    margin:  0 auto;
    /* padding: 0 1.5rem; */
    
    padding: 1rem 1rem 5rem;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    gap: 2rem;

    padding: 1rem 1rem 5rem;

    //Empilha os elementos a medida que o tamanho da tela vai reduzindo.
    @media(max-width: 768px) {
        flex-direction: column;
        height: auto;
    }
`

export const Title = styled.h1`
    font-weight: 600;
    text-align: center;
    
    color: ${(props) => props.theme['purple-700']};
`

export const Content = styled.div`
    width: calc(100% - 80px - 80px);

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;


     //Empilha os elementos a medida que o tamanho da tela vai reduzindo.
    @media(max-width: 768px) {
        flex-direction: column;
        width: auto;
        height: auto;
    }
    
`

export const ImageContainer = styled.div`
    img {
        width: 300px;
        height: 400px;
        max-width: 400px;
        max-height: 400px;
        object-fit: cover;
        border-radius: 8px;
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

    background: ${(props) => props.theme['purple-300']};

    header {
        display: flex;
        align-items: center;
        gap: 1rem;

        color: ${(props) => props.theme['gray-500']};

        svg {
            min-width: 32px;
            color: ${(props) => props.theme['purple-700']};
        }
    }

    strong {
        display: block;
        font-size: 1.125rem;
        font-weight: 300;
    }
`