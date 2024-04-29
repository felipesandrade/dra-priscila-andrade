import styled from 'styled-components';


export const HeaderContainer = styled.div`
    width: 100%;

    margin: 0 auto;

    position: static;

    display: flex;
    justify-content: center;
    align-items: center;
    
    height: 5.3rem;

    /* border-bottom: 1px solid ${(props) => props.theme['rose-gold-200']}; */
    
    background-color: ${(props) => props.theme['rose-gold-75']};
`

export const HeaderContent = styled.header`
    width: 100%;
    max-width: 1440px;

    margin: 0 auto;
    padding: 0 24px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    transition: all .3s ease-out;

    nav {
        display: flex;
        gap: 2rem;
        
        a, .scroll {
            display: flex;
            justify-content: center;
            align-items: center;

            text-decoration: none;

            font-size: 1rem;
            font-weight: bold;
            cursor: pointer;

            color: ${(props) => props.theme['rose-gold-500']};

            &:hover {
                color: ${(props) => props.theme['rose-gold-700']};
                border-bottom: 3px solid;
                padding-block: 1.8rem;
                transition: 0.3s;
            }

            &.active {    
                color: ${(props) => props.theme['rose-gold-700']};
            }

        }
    }

    a {
        text-decoration: none;

        button {
            margin: 0 auto;
        }
    } 

    @media (max-width: 1140px) {
        nav {
            gap: 1rem;
                a {
                    font-size: 1rem;
                }
            }
    }

     // Esconde a navbar quando o tamanho da tela for menor que 830px
     @media (max-width: 870px) {
         
            .navigation-menu {
                // navigation menu is positioned to start 5rem from the top of the document (which is directly below the navbar)
                position: absolute;
                z-index: 999;
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
                color: ${(props) => props.theme['gray-500']};
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

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
        width: 118px;
        height: 71px;
        aspect-ratio: 16 / 9;
    }
        
    @media (max-width: 869px) {
        width: 100%;
    }
`

export const MenuButton = styled.button`
    border: 0;

    border-radius: 8px;

    display: none;
    transition: background-color 0.2s ease-in-out;

    padding: 0.5rem;

    background-color: ${(props) => props.theme['rose-gold-700']};
    color: ${(props) => props.theme['white']};

    font-weight: bold;

    cursor: pointer;

    &:hover {
        transition: 0.3s;
        color: ${(props) => props.theme['white']};
        background: ${(props) => props.theme['rose-gold-300']};
    }

    //Mostra o menu do tipo list quando o tamanho da tela for menor que 830px
    @media(max-width: 869px) {
        display: flex;
    }
`
