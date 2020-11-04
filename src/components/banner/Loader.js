import React from 'react'
import styled, { keyframes } from 'styled-components'

import { colors, mq } from 'utils/styles'

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  opacity: ${props => (props.visible ? 1 : 0)};
  pointer-events: none;
  transition: opacity 500ms linear;
`
const Title = styled.div`
  margin-bottom: 0.3em;
  font-size: 4vw;
  font-weight: 900;
  text-align: center;
  color: ${colors.white};

  ${mq.mediumPortrait} {
    font-size: 8vw;
  }
  ${mq.mediumPortrait} {
    font-size: 10vw;
  }
`
const drive = keyframes`
  from {
    transform: translate3d(-100%, 0, 0);
  }

 to {
    transform: translate3d(100vw, 0, 0);
  }
}`
const Svg = styled.svg`
  width: 10vw;
  animation: ${drive} 1.5s infinite linear;

  ${mq.mediumPortrait} {
    width: 20vw;
    animation: ${drive} 1s infinite linear;
  }
`
const Line = styled.line`
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 12.5px;
  stroke: ${colors.white};
`
const Circle = styled.circle`
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 12.5px;
  stroke: ${colors.white};
`
const Polyline = styled.polyline`
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 12.5px;
  stroke: ${colors.white};
`
export default function Loader(props) {
  return (
    <Wrapper visible={props.visible}>
      <Title>Chargement...</Title>
      <Svg viewBox='0 0 218.02 173.12'>
        <Circle cx='183.75' cy='138.84' r='28.03' />
        <Circle cx='54.79' cy='118.33' r='48.54' />
        <Circle cx='54.79' cy='118.33' r='18.06' />
        <Line x1='100.33' y1='135.14' x2='155.97' y2='135.14' />
        <Line x1='154.94' y1='75.95' x2='154.94' y2='41.85' />
        <Line x1='39.04' y1='72.4' x2='50.15' y2='6.25' />
        <Polyline points='134.51 75.95 113.41 6.25 32.21 6.25' />
        <Polyline points='183.75 110.82 177.68 75.95 78.46 75.95' />
      </Svg>
    </Wrapper>
  )
}
