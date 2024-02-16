import styled from 'styled-components';

export const ButtonContainer = styled.button`
    min-width: 10.25rem;
    min-height: 3.25rem;
    border: 0;
    border-radius: 8px;
    margin-right: 4rem;
    padding: 1rem;

    box-shadow: 2px 2px 3px #999;

    background: ${(props) => props.theme['green-800']};

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.3rem;

    font-size: 0.875rem;
    font-weight: 700;
    letter-spacing: 1px;

    color: ${(props) => props.theme['white']};
    
    cursor: pointer;

    &:hover {
        opacity: 0.9;
        transition: 0.3s;
        background: ${(props) => props.theme['green-800']};
    }

     // Esconde o botão quando o tamanho da tela for menor que 830px
     @media (max-width: 870px) {
            display: none;
    }
`