import React, { useState } from 'react'
import styled from 'styled-components'

import { colors } from 'utils/styles'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`
const Content = styled.div`
  position: relative;
  font-size: ${props => (props.large ? '24px' : '18px')};
  font-weight: 500;
  text-align: center;
  line-height: 1.3;
  text-align: center;
  cursor: pointer;
`
const DQRNumber = styled.span`
  font-weight: 900;
`
const Sup = styled.sup`
  position: absolute;
  top: 0em;
  left: calc(100% + 0.3em);
  font-size: 0.5em;
`
const Tooltip = styled.div`
  position: absolute;
  bottom: calc(100%);
  left: 0;
  right: 0;
  padding: 1em;
  font-size: 14px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background: ${colors.lightSecondary};
  box-shadow: ${props =>
    `0 0 8px 0 rgba(0, 0, 0, 0.08), 0 0 15px 0 rgba(0, 0, 0, 0.02),
      0 0 20px 4px rgba(0, 0, 0, 0.06)`};
  opacity: ${props => (props.visible ? 1 : 0)};
  pointer-events: ${props => (props.visible ? 'inherit' : 'none')};
  transition: opacity 300ms ease-out;
`

export default function DQR(props) {
  const [visible, setVisible] = useState(false)
  return (
    <Wrapper>
      <Content
        large={props.large}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        DQR : <DQRNumber>{props.dqr}</DQRNumber> <Sup>(?)</Sup>
      </Content>
      <Tooltip
        visible={visible}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        Ce chiffre correspond au <b>Data Quality Ratio</b> (DQR), il indique
        le niveau de confiance que l'on peut avoir dans le score. Plus le DQR
        est proche de 1, plus la donnée est fiable ; plus la valeur se rapproche
        de 5, plus le score rend compte d'une incertitude importante.{' '}
        <b>Une donnée avec un DQR >= 3 est considérée comme peu fiable. </b>
      </Tooltip>
    </Wrapper>
  )
}
