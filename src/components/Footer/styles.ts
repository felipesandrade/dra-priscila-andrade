import styled from 'styled-components'

export const FooterContainer = styled.footer`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    justify-items: center;
    gap: 8rem;
    
    height: 4rem;
    padding: 2rem;
    bottom: 0;

    //Empilha os elementos a medida que o tamanho da tela vai reduzindo.
    @media(max-width: 430px) {
        flex-direction: column;
        gap: 2rem;
    }
`
export const SocialMedia = styled.div`
    color: ${(props) => props.theme['purple-700']};

    a {
        color: ${(props) => props.theme['purple-700']};     
        text-decoration: none;

        &:hover {
            opacity: 0.9;
            transition: 0.3s;
            color: ${(props) => props.theme['purple-500']};
        }
    }
`
export const Copyright = styled.div`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 0.8rem;

    line-height: 1.188rem;

    text-align: center;

    color: ${(props) => props.theme['purple-500']};

    //Corrige o espaçamento quando o tamano da tela for reduzida.
    @media(max-width: 430px) {
        padding-bottom: 2rem;
    }
`