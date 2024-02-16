import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const LayoutContainer = styled(Container)`
    min-height: 100vh; /* will cover the 100% of viewport */
    overflow: hidden;
    display: block;
    position: relative;
    margin: 0;
    padding: 0;
`

export const WhatasappContainer = styled.div`
    width: 65px;
    height: 65px;

    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;

    bottom: 143px;
    right: 20px;

    border-radius: 35%;

    box-shadow: 2px 2px 3px #999;

    background-color: ${(props) => props.theme['green-800']};

    color: ${(props) => props.theme['white']};

    cursor: pointer;

    &:hover {
        opacity: 0.9;
        transition: 0.3s;
        background: ${(props) => props.theme['green-800']};
    }
`

export const BackToTop = styled.div`
    width: 65px;
    height: 65px;

    display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;

    bottom: 68px;
    right: 20px;

    border-radius: 35%;

    box-shadow: 2px 2px 3px #999;

    background-color: ${(props) => props.theme['rose-gold-700']};

    color: ${(props) => props.theme['white']};
    
    cursor: pointer;

    &:hover {
        opacity: 0.9;
        transition: 0.3s;
        background: ${(props) => props.theme['rose-gold-700']};
    }
`