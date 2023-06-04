import styled from 'styled-components';


export const FaqContainer = styled.div`
    width: 100%;

    max-width: 1120px;
    
    margin:  0 auto;
    /* padding: 0 1.5rem; */

    padding: 1rem 1rem 5em;
`

export const Title = styled.h1`
    font-weight: 600;
    text-align: center;

    padding-bottom: 4rem;

    color: ${(props) => props.theme['purple-700']};
`

export const FaqContent = styled.div`
    width: calc(100% - 80px - 80px);

    margin: 0 auto;
    padding: 0;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 4rem;

    @media(max-width: 768px) {
        display: flex;
        flex-direction: column;
        width: auto;
        height: auto;
   }
`

export const FaqCard = styled.div`
    font-size: 1.4rem;
    font-weight: 500;
    text-align: justify;
    
    color: ${(props) => props.theme['gray-500']};

    header {
        margin-bottom: 1rem;
    }

    span {
        font-size: 1.125rem;
        font-weight: 300;
    }


    @media(max-width: 768px) {
        /* font-size: 5vw; */

        span {
            font-size: 5vw;
        }
   } 
      
`


