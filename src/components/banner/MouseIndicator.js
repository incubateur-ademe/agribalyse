import React from 'react'
import styled, { keyframes } from 'styled-components'

import { colors } from 'utils/styles'

const bounce = keyframes`
  from,
  4%,
  10.6%,
  20% {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(-50%, 0, 0);
  }

  8%,
  8.6% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(-50%, -30px, 0) scaleY(1.1);
  }

  14% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(-50%, -15px, 0) scaleY(1.05);
  }

  16% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(-50%, 0, 0) scaleY(0.95);
  }

  18% {
    transform: translate3d(-50%, -4px, 0) scaleY(1.02);
  }
}`

const Svg = styled.svg`
  position: absolute;
  bottom: 2vw;
  left: 50%;
  transform: translateX(-50%);
  width: 3vw;
  opacity: ${props => (props.visible ? 1 : 0)};
  transition: all 300ms linear 3000ms;
  animation: ${bounce} 5s infinite;
`
const Path = styled.path`
  fill: ${colors.white};
`

export default function MouseIndicator(props) {
  return (
    <Svg x='0px' y='0px' viewBox='0 0 21.825 21.825' visible={props.visible}>
      <Path
        d='M16.791,13.254c0.444-0.444,1.143-0.444,1.587,0c0.429,0.444,0.429,1.143,0,1.587l-6.65,6.651
	c-0.206,0.206-0.492,0.333-0.809,0.333c-0.317,0-0.603-0.127-0.81-0.333l-6.65-6.651c-0.444-0.444-0.444-1.143,0-1.587
	s1.143-0.444,1.587,0l4.746,4.762V1.111C9.791,0.492,10.299,0,10.918,0c0.619,0,1.111,0.492,1.111,1.111v16.904L16.791,13.254z'
      />
    </Svg>
  )
}
