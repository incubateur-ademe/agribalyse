import React from 'react'
import styled from 'styled-components'

import { colors } from 'utils/styles'

const Svg = styled.svg`
  height: 1.5em;
  margin-right: 0.7em;
`
const Line = styled.line`
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
    <Svg viewBox='0 0 166.64 212.01'>
      <Path
        white={props.white}
        d='M246.52,200.48c0,3.65-15.45,7.5-34.5,7.5s-34.5-3.85-34.5-7.5m69,20.55c0,3.65-15.45,7.5-34.5,7.5s-34.5-3.85-34.5-7.5m69.63,20.8c0,3.65-15.44,7.51-34.49,7.51s-34.5-3.86-34.5-7.51'
        transform='translate(-86.77 -64.43)'
      />
      <Polyline
        white={props.white}
        points='6.25 61.76 38.91 61.76 68.85 61.76'
      />
      <Path
        white={props.white}
        d='M247.15,159.9V262.09m-69.63.42V160.68m69.63,102c0,3.65-15.59,7.5-34.81,7.5s-34.82-3.85-34.82-7.5M247.15,160.5c0,3.65-15.59,7.5-34.81,7.5s-34.82-3.85-34.82-7.5,15.59-7.5,34.82-7.5S247.15,156.85,247.15,160.5ZM107.64,90.69v-20h62.61V90.85m18.8,64.25V126.19l-18.8-35.55m7.27,159.43H156.18m-.56-123.88L170.3,90.64H107.7L93,126.19V250.07h62.6V126.19'
        transform='translate(-86.77 -64.43)'
      />
      <Line x1='56.6' y1='43.86' x2='56.86' y2='43.86' />
    </Svg>
  )
}
