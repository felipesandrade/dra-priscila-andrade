import styled from 'styled-components';

export const ConsultaionContainer = styled.div`
    width: 100%;

    max-width: 1120px;
    
    margin:  0 auto;
    /* padding: 0 1.5rem; */

    padding: 0 0 5rem 0;
`

export const Title = styled.h1`
    font-weight: 600;
    text-align: center;

    padding-bottom: 2rem;

    color: ${(props) => props.theme['rose-gold-700']};
`

export const BeneftisContent = styled.div`
    width: calc(100% - 80px - 80px);

    margin: 0 auto;
    padding: 0;

    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;

    //Empilha os elementos a medida que o tamanho da tela vai reduzindo.
    @media(max-width: 768px) {
        display: flex;
        flex-direction: column;
        width: 70vw;
        height: auto;
    }
`

export const BenefitCard = styled.div`
    min-width: 160px;
    text-align: center;

    color: ${(props) => props.theme['gray-500']};
    background: ${(props) => props.theme['rose-gold-75']};

    border-radius: 8px;
    padding: 2rem;

    header {
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${(props) => props.theme['rose-gold-700']};
    }

    strong {
        display: block;
        margin-top: 1rem;
        font-size: 1.125rem;
        font-weight: 300;
    }
`