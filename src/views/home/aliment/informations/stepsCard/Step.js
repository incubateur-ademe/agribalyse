import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { colors } from 'utils/styles'

const Wrapper = styled.div`
  margin-bottom: 1em;

  &:last-child {
    margin-bottom: 0;
  }
`
const Title = styled.h5`
  margin-bottom: 0.2em;
`
const Graph = styled.div`
  position: relative;
  height: 2em;
  background-color: ${colors.lightMain};
  cursor: pointer;
`
const Bar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: ${props => props.percent}%;
  height: 2em;
  background-color: ${colors.main};
  transition: all 300ms linear ${props => props.delay * 300}ms;
`
const Percent = styled.div`
  padding: 0.5em 1em;
  font-weight: 900;
  line-height: 1;
  color: ${props => (props.hover ? colors.black : colors.main)};
`
const WhitePercent = styled(Percent)`
  color: ${props => (props.hover ? colors.black : colors.white)};
  white-space: nowrap;
`

export default function Step(props) {
  const [hover, setHover] = useState(false)

  const [percent, setPercent] = useState(0)

  useEffect(() => {
    setPercent(Math.floor((props.value / props.max) * 1000) / 10)
  }, [props.value, props.max])

  return (
    <Wrapper>
      <Title>{props.title}</Title>
      <Graph
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Percent hover={hover}>{percent} %</Percent>
        <Bar percent={percent} delay={props.delay}>
          <WhitePercent hover={hover}>{percent} %</WhitePercent>
        </Bar>
      </Graph>
    </Wrapper>
  )
}
