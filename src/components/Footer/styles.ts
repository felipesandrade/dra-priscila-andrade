import styled from 'styled-components'

export const FooterContainer = styled.footer`
    width: 100%;
    
    height: 4rem;
    
    /* border-top: 1px solid ${(props) => props.theme['purple-200']}; */
`

export const FooterContent = styled.div`
    max-width: 1440px;

    margin: 0 auto;

    padding: 1rem 1rem 5rem;

    display: flex;
    align-items: center;
    justify-items: center;
    justify-content: space-between;
    /* gap: 2rem; */
`

export const SocialMedia = styled.div`
    color: ${(props) => props.theme['rose-gold-300']};

    a {
        color: ${(props) => props.theme['rose-gold-300']};     
        text-decoration: none;

        &:hover {
            opacity: 0.9;
            transition: 0.3s;
            color: ${(props) => props.theme['rose-gold-300']};
        }
    }
`
export const Copyright = styled.div`
    width: 100%;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 0.8rem;

    line-height: 1.188rem;

    text-align: center;

    color: ${(props) => props.theme['rose-gold-500']};

`