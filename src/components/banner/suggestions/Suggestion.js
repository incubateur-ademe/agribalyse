import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors, mq } from 'utils/styles'

const Wrapper = styled(Link)`
  display: block;
  margin: 0 0.5vw 1vw;
  padding: 0.8em 1.6em;
  font-size: 0.8vw;
  font-weight: 700;
  color: ${colors.main};
  background-color: ${colors.white};
  border: 1px solid ${colors.white};
  border-radius: 1em;
  cursor: pointer;
  text-decoration: none;
  transition: all 300ms ease-out;

  &:hover {
    color: ${colors.white};
    background-color: ${colors.main};
  }

  ${mq.medium} {
    font-size: 1vw;
  }
  ${mq.mediumPortrait} {
    font-size: 1.5vw;
  }
  ${mq.small} {
    font-size: 3vw;
    margin: 1vw;
  }
`

export default function Suggestion(props) {
  return (
    <Wrapper to={`/aliments/${props.aliment.ciqual_code}`}>
      {props.aliment.nom_francais.substring(0, 40)}
    </Wrapper>
  )
}
