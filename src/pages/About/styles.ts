import styled from 'styled-components';

export const AboutContainer = styled.div`
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    gap: 4rem;

    padding: 1rem;

    //Empilha os elementos a medida que o tamanho da tela vai reduzindo.
    @media(max-width: 768px) {
        flex-direction: column;
        height: auto;
    }
`

export const Title = styled.div`
    font-size: 2.25rem;
    font-weight: 500;
    text-align: center;
    
    color: ${(props) => props.theme['purple-700']};
`

export const Content = styled.div`
    width: calc(100% - 80px - 80px);

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;


     //Empilha os elementos a medida que o tamanho da tela vai reduzindo.
    @media(max-width: 768px) {
        flex-direction: column;
        width: auto;
        height: auto;
    }
    
`

export const ImageContainer = styled.div`
    img {
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
        font-size: 5vw;
        line-height: 2rem;
        width: auto;
        height: auto;
    }
`

export const SkillsContainer = styled.div`
    width: calc(100% - 80px - 80px);
 
    border-radius: 8px;
    
    font-size: 1.563rem;
    font-weight: 300;
    line-height: 3rem;
    text-align: left;


    color: ${(props) => props.theme['gray-500']};
    background-color: ${(props) => props.theme['purple-300']};

    ul {
        padding: 1rem;
    }

    li {
        padding: 0.5rem;
        list-style: none;

        border-bottom: 1px solid;
        border-color: ${(props) => props.theme['purple-500']};
    }

    span {
        margin-right: 1rem;
    }

    svg {
        color: ${(props) => props.theme['purple-700']};
    }
    //Empilha os elementos a medida que o tamanho da tela vai reduzindo.
    @media(max-width: 768px) {
        font-size: 5vw;
        line-height: 2rem;
        width: auto;
        height: auto;
    }
`