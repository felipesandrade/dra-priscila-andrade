import styled from 'styled-components';

export const AboutContainer = styled.div`
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    
    padding: 5rem;

    //Empilha os elementos a medida que o tamanho da tela vai reduzindo.
    @media(max-width: 630px) {
        flex-direction: column;
        height: auto;
    }
`

export const Image = styled.div`
    img {
        width: 445px;
        height: 648px;
    }
`

export const Doctor = styled.div``