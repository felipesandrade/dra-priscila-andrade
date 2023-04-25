import styled from 'styled-components'
import  image from '../../assets/img-dra-rosa-priscila-principal.png';
import { Link } from 'react-router-dom';


export const HomeContainer = styled.main`
    padding-bottom: 12rem;
`
export const Image = styled.image`
    background-image: url(${image});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: left;
    align-items: left;
    opacity: 5;
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


