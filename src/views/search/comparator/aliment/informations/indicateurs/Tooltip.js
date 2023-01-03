import React, { useState } from 'react'
import styled from 'styled-components'

import { colors } from 'utils/styles'

const Wrapper = styled.span`
  position: relative;
`
const Content = styled.sup`
  position: relative;
  font-weight: 500;
  cursor: pointer;
`
const Sup = styled.sup`
  position: absolute;
  top: 0em;
  left: calc(100% + 0.3em);
  font-size: 0.5em;
`
const Overlay = styled.div`
  position: absolute;
  bottom: calc(100%);
  left: -2rem;
  width: 18rem;
  padding: 1em;
  font-size: 14px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background: ${colors.lightSecondary};
  box-shadow: ${(props) =>
    `0 0 8px 0 rgba(0, 0, 0, 0.08), 0 0 15px 0 rgba(0, 0, 0, 0.02),
      0 0 20px 4px rgba(0, 0, 0, 0.06)`};
  opacity: ${(props) => (props.visible ? 1 : 0)};
  pointer-events: ${(props) => (props.visible ? 'inherit' : 'none')};
  transition: opacity 300ms ease-out;
`

export default function Tooltip() {
  const [visible, setVisible] = useState(false)
  return (
    <Wrapper>
      <Content
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        (?)
      </Content>
      <Overlay
        visible={visible}
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        Ces indicateurs représentent l’impact sur la santé lié à l’exposition de
        la population générale aux contaminants chimiques via les pollutions du
        milieu (air, eau, sol). Ces contaminants émis dans l’environnement sont
        notamment des pesticides, des métaux lourds ou encore des polluants
        industriels. L’exposition par ingestion directe d’un aliment contenant
        des résidus de pesticides n’est pour l’instant pas intégrée dans les
        calculs d’Analyse du Cycle de Vie. Cette exposition est par ailleurs
        encadrée par la réglementation « Limites Maximales de Résidus (LMR) » au
        niveau français et européen.
      </Overlay>
    </Wrapper>
  )
}
