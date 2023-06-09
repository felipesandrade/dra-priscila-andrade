import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        // Leva em consideração a borda no tamanho do elemento
        box-sizing: border-box;
    }

    body {
       background: ${(props) => props.theme['gray-50']};
       color: ${(props) => props.theme['gray-900']};
       -webkit-font-smoothing: antialiased;
       -moz-osx-font-smoothing: grayscale;
    }

    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
`