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
        //opacity: 0.9;
    }

    p {
        font-size: 1.1rem;
        font-weight: bold;
        text-shadow: 2px 2px 3px #616161;
    }

    h1 {
        color: ${(props) => props.theme['rose-gold-300']};
        font-weight: bold;
        text-shadow: 2px 2px 3px ${(props) => props.theme['white']};
    }

    h3 {
        color: ${(props) => props.theme['white']};
        font-weight: bold;
        text-shadow: 2px 2px 3px #616161;
    }
`
export const SlideButton = styled(Button)`
    min-width: 7.25rem;
    min-height: 3.25rem;
    margin: 0;

    display: inline;

    background: ${(props) => props.theme['rose-gold-700']};

    &:hover {
        background: ${(props) => props.theme['rose-gold-700']};
    }
`

export const Banner = styled.div`
    width: 800px;

    @media(max-width: 768px) {
        padding-bottom: 15rem;
    }
`

export const BannerContainer = styled.div`
    width: 100%;

    position: absolute;
    margin-top: -5rem;
`

export const BannerContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

      //Empilha os elementos a medida que o tamanho da tela vai reduzindo.
      @media(max-width: 768px) {
        flex-direction: column;
        align-items: center;
        height: auto;
    }
`

export const Text = styled.div`
    width: 25%;
    height: 150px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

    color: ${(props) => props.theme['white']};
    
    background-color: ${(props) => props.theme['green-300']};

    text-align: center;

    h2 {
        font-size: 1.5rem;
        font-weight: 600;
    }

    @media(max-width: 768px) {
        min-width: 300px;
        min-height: 200px;

        padding: 1rem;

        border-bottom-left-radius: 0;

        border-top-left-radius: 10px;
        border-top-right-radius: 10px;        
    }
`

export const Appointment = styled.div`
    width: 25%;
    height: 150px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;

    background-color: ${(props) => props.theme['gray-100']};

    @media(max-width: 768px) {
        min-width: 300px;
        min-height: 200px;

        border-top-right-radius: 0;

        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }
`

export const BannerButton = styled(Button)`
    margin: 0 auto;

    @media(max-width: 768px) {
        display: flex;
        margin: 0 auto;
    }
`


