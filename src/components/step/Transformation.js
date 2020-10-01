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
    <Svg viewBox='0 0 151.16 189.73'>
      <Line white={props.white} x1='38.74' y1='183.35' x2='38.74' y2='146.75' />
      <Path
        white={props.white}
        d='M215.78,259.05h-3.63a23.74,23.74,0,0,1-23.67-23.67V105.49a23.74,23.74,0,0,1,23.67-23.67h3.63a23.74,23.74,0,0,1,23.67,23.67V235.38A23.74,23.74,0,0,1,215.78,259.05Zm-82.56-38.9V81.82'
        transform='translate(-94.54 -75.57)'
      />
      <Path
        white={props.white}
        d='M206.58,213.88,221.35,200m-14.77-23.16,14.77-13.9m-14.77-23.17,14.77-13.9'
        transform='translate(-94.54 -75.57)'
      />
      <Path
        white={props.white}
        d='M133.15,220.15C134.92,170.87,101.3,173,101.3,173s-7.12,42.33,31.85,47.17'
        transform='translate(-94.54 -75.57)'
      />
      <Path
        white={props.white}
        d='M133.15,182.88c1.77-49.28-31.85-47.17-31.85-47.17S94.18,178,133.15,182.88'
        transform='translate(-94.54 -75.57)'
      />
      <Path
        white={props.white}
        d='M133.15,145.56c1.77-49.28-31.85-47.17-31.85-47.17s-7.12,42.33,31.85,47.17'
        transform='translate(-94.54 -75.57)'
      />
      <Path
        white={props.white}
        d='M133.41,220.15c39-4.84,31.85-47.17,31.85-47.17s-33.63-2.11-31.85,47.17'
        transform='translate(-94.54 -75.57)'
      />
      <Path
        white={props.white}
        d='M133.41,182.88c39-4.84,31.85-47.17,31.85-47.17s-33.63-2.11-31.85,47.17'
        transform='translate(-94.54 -75.57)'
      />
      <Path
        white={props.white}
        d='M133.41,145.56c39-4.84,31.85-47.17,31.85-47.17s-33.63-2.11-31.85,47.17'
        transform='translate(-94.54 -75.57)'
      />
    </Svg>
  )
}
