import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';

export const TreatmentContainer =  styled.div`
    width: 100%;

    padding: 1rem 1rem 5rem;
`

export const Title = styled.h1`
    font-weight: 600;
    text-align: center;

    padding-bottom: 4rem;

    color: ${(props) => props.theme['purple-700']};
`

export const TextContent = styled.div`
    width: calc(100% - 80px - 80px);
    
    margin: 0 auto;
    padding: 0;

    font-size: 1.125rem;
    font-weight: 300;
    text-align: justify;
    
    color: ${(props) => props.theme['gray-500']};
    
    //Empilha os elementos a medida que o tamanho da tela vai reduzindo.
    @media(max-width: 768px) {
        display: flex;
        flex-direction: column;
        width: auto;
        height: auto;
    }
`

export const TreatmentContent = styled.div`
    width: calc(100% - 80px - 80px);

    margin: 0 auto;
    padding: 0;

    //Empilha os elementos a medida que o tamanho da tela vai reduzindo.
    @media(max-width: 768px) {
        display: flex;
        flex-direction: column;
        width: auto;
        height: auto;
    }

    .custom-react-multi-carousel-list { 
        padding-bottom: 2rem;
    }
`

export const TreatmentCard = styled.div`
    margin-top: 2rem;

    text-align: center;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        width: 200px;
        height: 150px;
        object-fit: cover;

        margin-bottom: 1rem;

        border-radius: 8px;
    }

    strong {
        color: ${(props) => props.theme['gray-500']}
    }

    //Empilha os elementos a medida que o tamanho da tela vai reduzindo.
    @media(max-width: 768px) {
        img {
            width: auto;
            height: auto;
            object-fit: cover;
        }
    }
    

`