import React from 'react'
import styled from 'styled-components'

import { colors } from 'utils/styles'

const Wrapper = styled.div``
const Title = styled.div`
  font-size: 12px;
  text-align: center;
`
const Graph = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.2em;
`
const Start = styled.div`
  margin: 0 2em;
  font-size: 14px;
  font-weight: 700;
`
const End = styled(Start)`
  margin: 0 2em;
`
const Bar = styled.div`
  position: relative;
  flex: 1;
  height: 2em;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: -1em;
    width: calc(100% + 2em);
    height: 0.8em;
    transform: translateY(-50%);
    background-color: ${colors.lightMain};
    border-radius: 0.3em;
  }
`
const Cursor = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  top: 0;
  left: ${props => props.percent}%;
  height: 2em;
  transform: translateX(-50%);
  padding: 0.3em 0.6em;
  font-weight: 700;
  line-height: 1;
  color: ${colors.white};
  border-radius: 0.3em;
  background-color: ${colors.main};
`
export default function DQR(props) {
  return (
    <Wrapper>
      <Graph>
        <Start>0</Start>
        <Bar>
          <Cursor percent={(props.value / 5) * 100}>{props.value}</Cursor>
        </Bar>
        <End>5</End>
      </Graph>
      <Title>Niveau de fiabilité de la donnée</Title>
    </Wrapper>
  )
}
