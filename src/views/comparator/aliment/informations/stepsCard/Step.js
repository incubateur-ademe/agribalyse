import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { colors } from 'utils/styles'

import Agriculture from './step/Agriculture'
import Transformation from './step/Transformation'
import Emballage from './step/Emballage'
import Transport from './step/Transport'
import Distribution from './step/Distribution'
import Consommation from './step/Consommation'

const Wrapper = styled.div`
  flex: 1;
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
  height: 2.5em;
  background-color: ${colors.lightMain};
  border-radius: 1em;
  cursor: pointer;
`
const Bar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: ${props => props.percent}%;
  height: 2.5em;
  background-color: ${colors.main};
  border-radius: 1em;
  transition: all 300ms linear ${props => props.delay * 300 + 1500}ms;
`
const SvgWrapper = styled.div`
  width: 2.4em;
`
const Percent = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5em 0.7em;
  font-weight: 900;
  line-height: 1;
  color: ${props => (props.hover ? colors.black : colors.main)};
  font-family: 'Montserrat', sans-serif;
`
const WhitePercent = styled(Percent)`
  min-width: 200px;
  white-space: nowrap;
  color: ${props => (props.hover ? colors.black : colors.white)};
`

export default function Step(props) {
  const [hover, setHover] = useState(false)

  const [percent, setPercent] = useState(0)

  useEffect(() => {
    setPercent(Math.floor((props.value / props.max) * 1000) / 10)
  }, [props.value, props.max])

  const selectSvg = (delay, white) =>
    delay === 0 ? (
      <Agriculture white={white} />
    ) : delay === 1 ? (
      <Transformation white={white} />
    ) : delay === 2 ? (
      <Emballage white={white} />
    ) : delay === 3 ? (
      <Transport white={white} />
    ) : delay === 4 ? (
      <Distribution white={white} />
    ) : (
      <Consommation white={white} />
    )
  return (
    <Wrapper>
      <Title> {props.title}</Title>
      <Graph
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Percent hover={hover}>
          <SvgWrapper>{selectSvg(props.delay, false)}</SvgWrapper> {percent} %
        </Percent>
        <Bar percent={percent} delay={props.delay}>
          <WhitePercent hover={hover}>
            <SvgWrapper>{selectSvg(props.delay, true)}</SvgWrapper> {percent} %
          </WhitePercent>
        </Bar>
      </Graph>
    </Wrapper>
  )
}
