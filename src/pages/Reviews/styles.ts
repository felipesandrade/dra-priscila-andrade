import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';

export const ReviewContainer =  styled.div`
    width: 100%;

    max-width: 1280px;
    
    margin:  0 auto;

    padding: 1rem 1rem 5rem;
`

export const Title = styled.h1`
    font-weight: 600;
    text-align: center;

    padding-bottom: 2rem;

    color: ${(props) => props.theme['rose-gold-700']};
`
export const ReviewContent = styled.div`
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

export const ReviewCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;

    text-align: center;

    margin: 1rem;

    img {
        width: 40px;
        height: 40px;
    }

    strong {
        color: ${(props) => props.theme['gray-500']}
    }
`

export const ReviewCardStars = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
`

export const ReviewCardDate = styled.div`
    font-size: 1.125rem;
    font-weight: 300;
    text-align: left;
    
    color: ${(props) => props.theme['gray-600']};

`

export const ReviewCardContent = styled.div`
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;

    font-size: 1.125rem;
    font-weight: 300;
    text-align: left;
    
    color: ${(props) => props.theme['gray-500']};
`