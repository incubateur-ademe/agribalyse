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
const Circle = styled.circle`
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
    <Svg viewBox='0 0 218.02 173.12'>
      <Circle white={props.white} cx='183.75' cy='138.84' r='28.03' />
      <Circle white={props.white} cx='54.79' cy='118.33' r='48.54' />
      <Circle white={props.white} cx='54.79' cy='118.33' r='18.06' />
      <Line
        white={props.white}
        x1='100.33'
        y1='135.14'
        x2='155.97'
        y2='135.14'
      />
      <Line white={props.white} x1='154.94' y1='75.95' x2='154.94' y2='41.85' />
      <Line white={props.white} x1='39.04' y1='72.4' x2='50.15' y2='6.25' />
      <Polyline
        white={props.white}
        points='134.51 75.95 113.41 6.25 32.21 6.25'
      />
      <Polyline
        white={props.white}
        points='183.75 110.82 177.68 75.95 78.46 75.95'
      />
    </Svg>
  )
}
