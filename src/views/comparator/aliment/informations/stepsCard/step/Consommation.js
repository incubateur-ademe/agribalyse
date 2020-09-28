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
export default function Transformation(props) {
  return (
    <Svg viewBox='0 0 196.53 174.16'>
      <Line x1='131.2' y1='82.83' x2='190.28' y2='82.83' />
      <Path
        white={props.white}
        d='M203.8,166.19H203M180.9,251.27H101a22.9,22.9,0,0,1-22.9-22.9V166.19H203.8v62.18A22.9,22.9,0,0,1,180.9,251.27Z'
        transform='translate(-71.82 -83.36)'
      />
      <Path
        white={props.white}
        d='M155.6,143.51a19.41,19.41,0,0,1-.49-27,19.39,19.39,0,0,0-.48-26.94m-27.39,53.9a19.41,19.41,0,0,1-.49-27,19.39,19.39,0,0,0-.48-26.94'
        transform='translate(-71.82 -83.36)'
      />
    </Svg>
  )
}
