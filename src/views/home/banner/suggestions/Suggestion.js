import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from 'utils/styles'

const Wrapper = styled(Link)`
  display: block;
  margin: 0 0.5vw 1vw;
  padding: 0.8em 1.6em;
  font-size: 1vw;
  color: ${colors.white};
  background-color: ${colors.main};
  cursor: pointer;
  text-decoration: none;
  transition: background-color 300ms ease-out;

  &:hover {
    background-color: ${colors.hoverMain};
  }
`

export default function Suggestion(props) {
  return (
    <Wrapper to={`/aliments/${props.aliment.ciqual_code}`}>
      {props.aliment.nom_francais}
    </Wrapper>
  )
}
