import React from 'react'
import styled from 'styled-components'

import { colors } from 'utils/styles'

const Wrapper = styled.div`
  margin: 0 0.5em 0.5em;
  padding: 0.8em;
  font-size: 12px;
  color: ${colors.white};
  background-color: ${colors.main};
  cursor: pointer;
  text-decoration: none;
  transition: background-color 300ms ease-out;

  &:hover {
    background-color: ${colors.hoverMain};
  }
`

export default function Category(props) {
  return <Wrapper onClick={props.onClick}>{props.category} x</Wrapper>
}
