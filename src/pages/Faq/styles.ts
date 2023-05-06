import styled from 'styled-components';


export const FaqContainer = styled.div`
    width: 100%;
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
    gap: 2rem;
`

export const FaqCard = styled.div``


