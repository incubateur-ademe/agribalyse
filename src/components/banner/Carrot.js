import React from 'react'
import styled from 'styled-components'

const Svg = styled.svg`
  position: absolute;
  bottom: ${props => (props.small ? '2vw' : '5vw')};
  right: ${props => (props.small ? '2vw' : '5vw')};
  width: ${props => (props.small ? '5vw' : '15vw')};
  transition: all 500ms ease-out;
`
const Path = styled.path`
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 12.5px;
  stroke: white;
  stroke-dasharray: ${props => props.length};
  stroke-dashoffset: ${props => (props.visible ? 0 : props.length)};
  transition: stroke-dashoffset 700ms linear
    ${props => (props.opacity === 0.7 ? '1700ms' : '1000ms')};
`
const Line = styled.line`
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 12.5px;
  stroke: white;
  stroke-dasharray: ${props => props.length};
  stroke-dashoffset: ${props => (props.visible ? 0 : props.length)};
  transition: stroke-dashoffset 700ms linear
    ${props => (props.opacity === 0.7 ? '1700ms' : '1000ms')};
`
export default function Carrot(props) {
  return (
    <Svg viewBox='0 0 172.35 172.42' small={props.small}>
      <Path
        className='pathOne'
        opacity={0.7}
        length={62.801273345947266}
        visible={props.visible}
        d='M250,116.46l-31,5m5-31-5,31'
        transform='translate(-83.91 -84.22)'
      />
      <Path
        className='pathTwo'
        opacity={0.7}
        length={59.57373809814453}
        visible={props.visible}
        d='M128.67,206.12,114.8,192.24m46,.44,15,15m-22-66.08,13.25,13.25'
        transform='translate(-83.91 -84.22)'
      />
      <Path
        className='pathThree'
        opacity={1}
        length={452.3635559082031}
        visible={props.visible}
        d='M205.25,141.83,250,136.11m-51.26-.79,5.72-44.75m-2.3,47.82c-41.8-41.8-97.18,66.35-111.54,103a6.58,6.58,0,0,0,8.52,8.52c36.67-14.36,144.82-69.74,103-111.54'
        transform='translate(-83.91 -84.22)'
      />
      <Line
        className='lineOne'
        opacity={1}
        length={53.386558532714844}
        visible={props.visible}
        x1='156.01'
        y1='16.42'
        x2='118.26'
        y2='54.17'
      />
    </Svg>
  )
}
