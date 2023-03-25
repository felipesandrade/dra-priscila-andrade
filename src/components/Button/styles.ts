import styled from 'styled-components';

export const ButtonContainer = styled.button`
    width: 10.25rem;
    height: 3.25rem;
    border: 0;
    border-radius: 8px;
    margin-right: 1rem;

    background: ${(props) => props.theme['purple-700']};

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 0.875rem;
    font-weight: bold;
    color: ${(props) => props.theme['white']};


    cursor: pointer;

    &:hover {
        opacity: 0.9;
        transition: 0.3s;
        background: ${(props) => props.theme['purple-700']};
    }

     // Esconde menu quando o tamanho da tela for menor que 540px
     @media (max-width: 830px) {
            display: none;
    }
`