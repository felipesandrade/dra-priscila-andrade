import { ThemeProvider } from 'styled-components'

import { HeaderContainer } from "./components/Header/styles";

import { GlobalStyle } from './styles/global';
import { defaultTheme } from './styles/themes/default';

export function App() {

  return (
    
    <ThemeProvider theme={defaultTheme}>
      <HeaderContainer />
      <GlobalStyle />
    </ThemeProvider>
  
  )
}

