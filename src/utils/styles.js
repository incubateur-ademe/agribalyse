import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

export const colors = {
  main: '#eb5b25',
  hoverMain: '#d63100',
  lightMain: '#ffd9cc',
  secondary: '#eebe08',
  hoverSecondary: '#edb10b',
  background: '#fefae1',
  black: 'rgb(33, 33, 33)',
  white: '#fdfdfd',
  text: 'rgb(66, 66, 66)'
}
/*export const colors = {
  main: 'rgb(210, 54, 105)',
  hoverMain: '#dc658d',
  lightMain: '#EECFD8',
  background: '#fefae1',
  black: 'rgb(33, 33, 33)',
  white: '#f4f4f4',
  text: 'rgb(66, 66, 66)'
}*/

export const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  html {
    box-sizing: border-box;
    font-family: 'Montserrat', serif;
    scroll-behavior: smooth;
  }

  body {
    background-color: ${colors.white};
  } 

  *, *:before, *:after {
    margin-top: 0;
    box-sizing: inherit;
    color: ${colors.text};
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
  }
`
