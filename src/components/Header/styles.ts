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

        
    }
`
