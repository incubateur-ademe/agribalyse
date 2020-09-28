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

export const breakpoints = {
  small: 640,
  mediumPortrait: 1000,
  medium: 1260,
  large: 1800,
  xlarge: 2000
}
export const mq = {
  small: `@media screen and (max-width: ${breakpoints.small}px)`,
  medium: `@media screen and (max-width: ${breakpoints.medium}px)`,
  mediumLandscape: `@media screen and (orientation: landscape) and (max-width: ${breakpoints.medium}px)`,
  mediumPortrait: `@media screen and (orientation: portrait) and (max-width: ${breakpoints.medium}px)`,
  large: `@media screen and (min-width: ${breakpoints.large}px)`,
  xlarge: `@media screen and (min-width: ${breakpoints.xlarge}px)`
}

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
