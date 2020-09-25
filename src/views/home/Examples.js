import React from 'react'
import styled from 'styled-components'

import { colors } from 'utils/styles'

const Wrapper = styled.div`
  background-color: ${colors.background};
`
const Sizer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4em 2em;
`
const Title = styled.h2`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2em;
`
const Cards = styled.div`
  display: flex;
  margin: 0 -1em;
`
export default function Examples() {
  return (
    <Wrapper>
      <Sizer>
        <Title>Exemples de cas d'usage</Title>
        <Cards></Cards>
      </Sizer>
    </Wrapper>
  )
}
