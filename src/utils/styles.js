import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

export const colors = {
  main: 'rgb(210, 54, 105)',
  hoverMain: '#dc658d',
  lightMain: '#EECFD8',
  background: '#fefae1',
  black: 'rgb(33, 33, 33)',
  white: '#f4f4f4',
  text: 'rgb(66, 66, 66)'
}
/*export const colors = {
  main: '#FF082D',
  secondary: '#04071A',
  background: '#04071A',
  text: '#FF082D',
  curators: '#01FFD6'
}*/

export const GlobalStyle = createGlobalStyle`
  ${styledNormalize}

  html {
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
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
    color: ${colors.main};
  }
`
