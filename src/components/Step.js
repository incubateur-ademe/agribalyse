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
  margin: 1em 0;

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
  background-color: ${props =>
    props.secondary ? colors.lightTernary : colors.lightMain};
  border-radius: 1em;
  overflow: hidden;
  cursor: pointer;
`
const Bar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: ${props => props.percent}%;
  height: 2.5em;
  background-color: ${props =>
    props.secondary ? colors.ternary : colors.main};
  transition: all 300ms linear ${props => props.delay * 300 + 1500}ms;
`
const SvgWrapper = styled.div`
  width: 2.4em;
`
const Percent = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0.5em 0.7em;
  font-weight: 900;
  line-height: 1;
  color: ${props =>
    props.hover
      ? colors.black
      : props.secondary
      ? colors.ternary
      : colors.main};
  font-family: 'Montserrat', sans-serif;
`
const WhitePercent = styled(Percent)`
  min-width: 200px;
  height: 100%;
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
      <SvgWrapper>
        <Agriculture white={white} />
      </SvgWrapper>
    ) : delay === 1 ? (
      <SvgWrapper>
        <Transformation white={white} />
      </SvgWrapper>
    ) : delay === 2 ? (
      <SvgWrapper>
        <Emballage white={white} />
      </SvgWrapper>
    ) : delay === 3 ? (
      <SvgWrapper>
        <Transport white={white} />
      </SvgWrapper>
    ) : delay === 4 ? (
      <SvgWrapper>
        <Distribution white={white} />
      </SvgWrapper>
    ) : delay === 5 ? (
      <SvgWrapper>
        <Consommation white={white} />
      </SvgWrapper>
    ) : null

  return (
    <Wrapper>
      <Title> {props.title}</Title>
      <Graph
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        secondary={props.secondary}
      >
        <Percent hover={hover} secondary={props.secondary}>
          {selectSvg(props.delay, false)} {percent} %
        </Percent>
        <Bar percent={percent} delay={props.delay} secondary={props.secondary}>
          <WhitePercent hover={hover}>
            {selectSvg(props.delay, true)} {percent} %
          </WhitePercent>
        </Bar>
      </Graph>
    </Wrapper>
  )
}
