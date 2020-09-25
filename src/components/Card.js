import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors } from 'utils/styles'

import Image from './card/Image'
import Legend from './card/Legend'
import Title from './card/Title'
import Subtitle from './card/Subtitle'
import Top from './card/Top'
import Bottom from './card/Bottom'

const StyledLink = styled(Link)`
  display: block;
  width: calc(${props => props.width} - 2em);
  margin: 0 1em 2em;
  text-decoration: none;
  transition: box-shadow 150ms linear;

  &:hover {
    box-shadow: ${props =>
      `0 0 8px 0 rgba(0, 0, 0, 0.08), 0 0 15px 0 rgba(0, 0, 0, 0.02),
      0 0 20px 4px rgba(0, 0, 0, 0.06)`};
  }
`
const StyledA = styled.a`
  display: block;
  width: calc(${props => props.width} - 2em);
  margin: 0 1em 2em;
  text-decoration: none;
  transition: box-shadow 150ms linear;

  &:hover {
    box-shadow: ${props =>
      `0 0 8px 0 rgba(0, 0, 0, 0.08), 0 0 15px 0 rgba(0, 0, 0, 0.02),
      0 0 20px 4px rgba(0, 0, 0, 0.06)`};
  }
`
const Wrapper = styled.div`
  display: block;
  width: calc(${props => props.width} - 2em);
  margin: 0 1em 2em;
`
const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  background-color: ${colors.white};
  border: 1px solid rgba(0, 0, 0, 0.12);
`
const Card = function Card(props) {
  return props.to ? (
    <StyledLink to={props.to} width={props.width} onClick={props.onClick}>
      <Content>{props.children}</Content>
    </StyledLink>
  ) : props.href ? (
    <StyledA
      href={props.href}
      target='_blank'
      rel='noopener noreferrer'
      width={props.width}
    >
      <Content>{props.children}</Content>
    </StyledA>
  ) : (
    <Wrapper width={props.width} onClick={props.onClick}>
      <Content>{props.children}</Content>
    </Wrapper>
  )
}

Card.Image = Image
Card.Legend = Legend
Card.Title = Title
Card.Subtitle = Subtitle
Card.Top = Top
Card.Bottom = Bottom

export default Card
