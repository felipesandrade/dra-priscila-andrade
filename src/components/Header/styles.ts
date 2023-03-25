import styled from 'styled-components'


export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props) => props.theme['purple-300']};

    img {
        margin-left: 1rem;
    }

    nav {
        display: flex;
        gap: 1rem;

        a {
            display: flex;
            justify-content: center;
            align-items: center;

            text-decoration: none;

            font-size: 16px;
            font-weight: bold;

            color: ${(props) => props.theme['purple-500']};

            &:hover {
                color: ${(props) => props.theme['purple-700']};
                border-bottom: 3px solid;
                padding-block: 1.8rem;
            }

            &.active {    
                color: ${(props) => props.theme['purple-700']};
            }

        }

        // Esconde menu quando o tamanho da tela for menor que 540px
        @media (max-width: 830px) {
            display: none;
       }
    }
`

export const MenuButton = styled.button`
    border: 0;
    padding: 1rem;
    border-radius: 8px;

    display: none;
    transition: background-color 0.2s ease-in-out;

    background-color: ${(props) => props.theme['purple-300']};
    color: ${(props) => props.theme['purple-700']};

    font-weight: bold;

    cursor: pointer;

    &:hover {
        transition: 0.3s;
        color: ${(props) => props.theme['white']};
        background: ${(props) => props.theme['purple-700']};
    }

    @media(max-width: 830px) {
        display: flex;
    }
`
