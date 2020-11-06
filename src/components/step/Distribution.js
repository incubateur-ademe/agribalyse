import React from 'react'
import styled from 'styled-components'

import { colors } from 'utils/styles'

const Svg = styled.svg`
  height: 1.5em;
  margin-right: 0.7em;
`
const Rect = styled.rect`
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 12.5px;
  stroke: ${props => (props.white ? colors.white : colors.main)};
`
const Path = styled.path`
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 12.5px;
  stroke: ${props => (props.white ? colors.white : colors.main)};
`
const Polyline = styled.polyline`
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 12.5px;
  stroke: ${props => (props.white ? colors.white : colors.main)};
`
export default function Transformation(props) {
  return (
    <Svg viewBox='0 0 194.46 172.21'>
      <Polyline
        white={props.white}
        points='81.99 165.96 81.99 78.74 34.84 78.74 34.84 165.96'
      />
      <Rect
        white={props.white}
        x='108.21'
        y='78.74'
        width='50.75'
        height='32.65'
      />
      <Path
        white={props.white}
        d='M170.19,117.79a13.64,13.64,0,0,0,13.64,13.65h3.88a13.85,13.85,0,0,0,13.66-16.38l-4.24-24.48H170.19Zm32.09,2.61a13.65,13.65,0,0,0,13.39,11h2.12c10.1,0,17.1-11,12.66-20.12L222,90.58H197.15Zm46.77-29.82H222l13.52,33.11a13.63,13.63,0,0,0,12.3,7.75c11,0,16.47-11.72,11.21-21.43ZM110,111c-3.85,9.46,3.13,20.43,12.57,20.43h2.12a13.66,13.66,0,0,0,13.4-11l5.13-29.82H118.34ZM81.3,110c-5.67,9.81.2,21.43,11.21,21.43a13.65,13.65,0,0,0,12.31-7.75l13.47-33.11h-27Zm1.24,17.11V250.29H258.78V125.68M139,115.06c-1.73,8.46,5.6,16.38,13.63,16.38h3.87a13.65,13.65,0,0,0,13.65-13.65V90.58H143.21Z'
        transform='translate(-72.86 -84.33)'
      />
    </Svg>
  )
}
