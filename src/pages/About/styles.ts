import styled from 'styled-components';

export const AboutContainer = styled.div`
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    gap: 4rem;

    padding: 5rem;

    //Empilha os elementos a medida que o tamanho da tela vai reduzindo.
    @media(max-width: 630px) {
        flex-direction: column;
        height: auto;
    }
`

export const Title = styled.div`
    font-size: 2.25rem;
    font-weight: 500;
    color: ${(props) => props.theme['purple-700']};
`

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    width: calc(100% - 80px - 80px);

     //Empilha os elementos a medida que o tamanho da tela vai reduzindo.
    @media(max-width: 630px) {
        flex-direction: column;
        height: auto;
    }
    
`

export const ImageContainer = styled.div`
    
    img {
        width: 400px;
        height: 400px;
        object-fit: cover;
        border-radius: 8px;
    }
`

export const DoctorContainer = styled.div`
    font-size: 1.125rem;
    font-weight: 300;
    text-align: justify;
    
    color: ${(props) => props.theme['gray-500']};

`