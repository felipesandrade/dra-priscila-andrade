import styled from 'styled-components'


export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props) => props.theme['purple-300']};

    nav {
        display: flex;
        gap: 1rem;

        a {
            display: flex;
            justify-content: center;
            align-items: center;

            text-decoration: none;

            color: ${(props) => props.theme['purple-500']};

            &:hover {
                color: ${(props) => props.theme['purple-700']};
            }

            &.active {
                border-bottom: 3px solid;
                padding-block: 1.8rem;
                
                color: ${(props) => props.theme['purple-700']};
            }

        }

        
    }
`
