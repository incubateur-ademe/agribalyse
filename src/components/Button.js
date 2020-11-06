import React from 'react'
import styled from 'styled-components'

import { colors } from 'utils/styles'

const StyledA = styled.a`
  display: block;
  text-decoration: none;
`
const Wrapper = styled.div``
const Content = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => (props.expand ? '100%' : 'auto')};
  height: 100%;
  padding: 0.8em 1.6em;
  font-size: 14px;
  font-weight: 500;
  color: ${props =>
    props.white
      ? colors.white
      : props.hollow
      ? colors.secondary
      : colors.white};
  background-color: ${props =>
    props.hollow ? colors.white : colors.secondary};
  border: 1px solid ${props => (props.white ? colors.white : colors.secondary)};
  border-radius: 1em;
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
  return props.href ? (
    <StyledA
      href={props.href}
      target='_blank'
      rel='noopener noreferrer'
      disabled={props.disabled}
    >
      <Content
        onClick={props.onClick}
        disabled={props.disabled}
        white={props.white}
        hollow={props.hollow}
        expand={props.expand}
      >
        {props.children}
      </Content>
    </StyledA>
  ) : (
    <Wrapper>
      <Content
        onClick={props.onClick}
        disabled={props.disabled}
        white={props.white}
        hollow={props.hollow}
        expand={props.expand}
      >
        {props.children}
      </Content>
    </Wrapper>
  )
}
