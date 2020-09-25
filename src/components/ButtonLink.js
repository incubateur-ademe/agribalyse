import React from 'react'
import styled from 'styled-components'

import { colors } from 'utils/styles'

const Wrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
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
  text-align: center;
  text-decoration: none;
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
      href={props.href}
      target='_blank'
      rel='noopener noreferrer'
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
