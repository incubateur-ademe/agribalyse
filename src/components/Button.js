import React from 'react'
import styled from 'styled-components'

import { colors } from 'utils/styles'

const Wrapper = styled.button`
  width: ${props => (props.expand ? '100%' : 'auto')};
  margin-bottom: ${props => (props.noMargin ? '0' : '0.5em')};
  padding: 0.8em 1.6em;
  font-weight: 500;
  color: ${props =>
    props.white
      ? colors.white
      : props.hollow
      ? colors.secondary
      : colors.white};
  border: 1px solid ${props => (props.white ? colors.white : colors.secondary)};
  background-color: ${props =>
    props.hollow ? colors.white : colors.secondary};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  pointer-events: ${props => (props.disabled ? 'none' : 'inherit')};
  cursor: pointer;
  transition: all 300ms ease-out;

  &:hover {
    background-color: ${props =>
      props.white
        ? colors.white
        : props.hollow
        ? colors.secondary
        : colors.hoverSecondary};
    color: ${props => (props.white ? colors.secondary : colors.white)};
  }
`
export default function Suggestion(props) {
  return (
    <Wrapper
      onClick={props.onClick}
      disabled={props.disabled}
      white={props.white}
      hollow={props.hollow}
      expand={props.expand}
      noMargin={props.noMargin}
    >
      {props.children}
    </Wrapper>
  )
}
