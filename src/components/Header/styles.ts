import styled from 'styled-components'


export const HeaderContainer = styled.header`
    height: 5.3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${(props) => props.theme['purple-300']};

    img {
        margin-left: 4em;
    }

    nav {
        display: flex;
        gap: 1rem;

        a, .scroll {
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
                transition: 0.3s;
            }

            &.active {    
                color: ${(props) => props.theme['purple-700']};
            }

        }
    }

     // Esconde a navbar quando o tamanho da tela for menor que 830px
     @media (max-width: 830px) {
            
            .navigation-menu {
                // navigation menu is positioned to start 5rem from the top of the document (which is directly below the navbar)
                position: absolute;
                top: 5rem;
                left: 0;
                // stacks the li tags vertically 
                flex-direction: column;
                // makes menu span full height and width
                width: 100%;
                height: calc(100vh - 77px);
                background-color: ${(props) => props.theme['gray-50']};
                border-bottom: 3px solid;
                display: none;
            }    
             
            .navigation-menu a {
                // centers link text and strips off margin
                text-align: center;
                margin: 0;
                color: black;
                // increases the surface area of the anchor tag to span the full width of the menu
                width: 100%;
                padding: 1.5rem 0;
            }

            .navigation-menu a:hover {
                background-color: ${(props) => props.theme['white']};
            }
            
            .navigation-menu.expanded {
                display: block;
            }

       }
`

export const MenuButton = styled.button`
    border: 0;
    padding: 1rem;
    margin-right: 1rem;
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

    //Mostra o menu do tipo list quando o tamanho da tela for menor que 830px
    @media(max-width: 830px) {
        display: flex;
    }
`
