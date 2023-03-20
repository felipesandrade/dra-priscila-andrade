import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        // Leva em consideração a borda no tamanho do elemento
        box-sizing: border-box;
    }

    body {
       background: ${(props) => props.theme['gray-100']};
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

`