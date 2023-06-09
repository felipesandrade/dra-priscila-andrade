import styled from 'styled-components';
import { Carousel } from 'react-bootstrap';

import { Button } from '../../components/Button';

export const HomeContainer = styled.main`
    width: 100%;

    a {
        text-decoration: none;
    }
`
export const CarouselContainer = styled(Carousel)`
    margin-bottom: 4rem;

    img {
        object-fit: cover;
        /* opacity: 0.9; */
    }

    p {
        font-size: 1.1rem;
        font-weight: bold;
    }

    h1 {
        color: ${(props) => props.theme['blue-600']};
        font-weight: bold;
    }

    h3 {
        color: ${(props) => props.theme['green-100']};
        font-weight: bold;
    }
`
export const SlideButton = styled(Button)`
    min-width: 7.25rem;
    min-height: 3.25rem;
    margin: 0;

    display: inline;

    background: ${(props) => props.theme['purple-700']};

    &:hover {
        background: ${(props) => props.theme['purple-700']};
    }
`


