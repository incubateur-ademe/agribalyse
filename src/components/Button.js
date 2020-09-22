import React from 'react'
import styled from 'styled-components'

import { colors } from 'utils/styles'

const Alignement = styled.div`
  display: flex;
  justify-content: ${props => (props.right ? 'flex-end' : 'flex-start')};
  margin-bottom: ${props => (props.noMargin ? '0' : '0.5em')};
`
const Wrapper = styled.button`
  width: ${props => (props.expand ? '100%' : 'auto')};
  padding: 0.8em 1.6em;
  color: ${props => (props.hollow ? colors.main : colors.white)};
  border: 1px solid ${colors.main};
  background-color: ${props => (props.hollow ? colors.white : colors.main)};
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  pointer-events: ${props => (props.disabled ? 'none' : 'inherit')};
  cursor: pointer;
  transition: all 300ms ease-out;

  &:hover {
    background-color: ${props =>
      props.hollow ? colors.main : colors.hoverMain};
    color: ${colors.white};
  }
`
export default function Suggestion(props) {
  return (
    <Alignement right={props.right} noMargin={props.noMargin}>
      <Wrapper
        onClick={props.onClick}
        disabled={props.disabled}
        hollow={props.hollow}
        expand={props.expand}
      >
        {props.children}
      </Wrapper>
    </Alignement>
  )
}
