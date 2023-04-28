import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';

export const HomeContainer = styled.main`
    width: 100%;
`
export const CarouselContainer = styled(Carousel)`
    img {
        object-fit: cover;
    }
`
export const SlideButton = styled.button`
    width: 7.25rem;
    height: 3.25rem;
    border: 0;
    border-radius: 8px;

    background: ${(props) => props.theme['purple-700']};


    font-size: 0.875rem;
    font-weight: bold;
    color: ${(props) => props.theme['white']};


    cursor: pointer;

    &:hover {
        opacity: 0.9;
        transition: 0.3s;
        background: ${(props) => props.theme['purple-700']};
    }
`


