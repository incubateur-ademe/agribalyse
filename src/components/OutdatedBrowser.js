import React from 'react'
import styled from 'styled-components'

import { colors, mq } from 'utils/styles'

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${colors.main};
`
const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  max-width: 800px;
  transform: translate(-50%, -50%);
  font-size: 3vw;
  font-weight: 900;
  color: ${colors.white};
  text-align: center;

  ${mq.small} {
    font-size: 8vw;
  }
`
export default function OutdatedBrowser() {
  return (
    <Wrapper>
      <Content>
        Votre navigateur n'est pas à jour et ne permet pas de visiter ce site
        correctement.
      </Content>
    </Wrapper>
  )
}
