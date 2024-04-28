import styled from 'styled-components';

export const LocationContainer = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 48rem;

    background-color: ${(props) => props.theme['rose-gold-75']};

    //Empilha os elementos a medida que o tamanho da tela vai reduzindo.
    @media(max-width: 630px) {
        height: auto;
    }
`

export const LocationContent = styled.div`
    width: 100%;
    height: 90%;
    max-width: 1440px;

    margin: 0 auto;

    padding: 1rem 1rem 1rem;

    display: flex;
    justify-content: space-between;
    position: relative;
    gap: 2rem;

    //Empilha os elementos a medida que o tamanho da tela vai reduzindo.
    @media(max-width: 630px) {
        flex-direction: column;
    }
`

export const Wrapper = styled.div`
    width: 100%;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    gap: 0.8rem;

`

export const TitleAdress = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
    gap: 0.5rem;

    svg {
        color: ${(props) => props.theme['rose-gold-700']};
    }

    span {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 1.5rem;

        text-align: center;

        color: ${(props) => props.theme['rose-gold-700']}
    }

`
export const Adress = styled.div`
    ul {
        padding-left: 0;
        margin: 0.5rem;
    }

    li {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 1rem;
        line-height: 1.25rem;

        text-align: center;

        list-style: none;

        color: ${(props) => props.theme['rose-gold-700']}; 
    }
`

export const Phone = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
    gap: 0.5rem;

    svg {
        color: ${(props) => props.theme['rose-gold-700']};
    }

    span {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 1rem;
        line-height: 1.25rem;

        text-align: center;

        color: ${(props) => props.theme['rose-gold-700']};
    }

    span a {

        text-decoration: none;
        color: ${(props) => props.theme['rose-gold-700']};
    }

    span a:hover {
        opacity: 0.9;
        transition: 0.3s;
        color: ${(props) => props.theme['rose-gold-500']};
    }
`

export const WhatsApp = styled.div`
    display: flex;
    align-items: center;
    justify-items: center;
    gap: 0.5rem;

    svg {
        color: ${(props) => props.theme['rose-gold-700']};
    }

    span {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 1rem;
        line-height: 1.25rem;

        text-align: center;

        color: ${(props) => props.theme['rose-gold-700']};
    }

    span a {

        text-decoration: none;
        color: ${(props) => props.theme['rose-gold-700']};
    }

    span a:hover {
        opacity: 0.9;
        transition: 0.3s;
        color: ${(props) => props.theme['rose-gold-500']};
    }
`

export const Doctoralia = styled.div`
    width: 100%;
`

export const Map = styled.div`
    width: 100%;
    height: 99%;

    iframe {
        border-radius:  8px;
    }

    //Empilha os elementos a medida que o tamanho da tela vai reduzindo.
    @media(max-width: 630px) {
        height: 350px;
        //margin-left: 1rem;
    }
`

export const ImageContainer = styled.div`
    margin: 0.5rem;

    img {
        width: 180px;
        height: 180px;
        aspect-ratio: 1 / 1;
    }
`

