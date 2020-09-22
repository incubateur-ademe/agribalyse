import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import Title from './card/Title'
import Subtitle from './card/Subtitle'
import Top from './card/Top'
import Bottom from './card/Bottom'

const Wrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(${props => props.width} - 2em);
  margin: 0 1em 2em;
  text-decoration: none;
  border: 1px solid rgba(0, 0, 0, 0.12);
  cursor: ${props => (props.to ? 'pointer' : 'initial')};
  transition: box-shadow 150ms linear;

  &:hover {
    box-shadow: ${props =>
      props.to
        ? `0 0 8px 0 rgba(0, 0, 0, 0.08), 0 0 15px 0 rgba(0, 0, 0, 0.02),
      0 0 20px 4px rgba(0, 0, 0, 0.06)`
        : 'none'};
  }
`
const Card = function Card(props) {
  return (
    <Wrapper to={props.to} width={props.width}>
      {props.children}
    </Wrapper>
  )
}

Card.Title = Title
Card.Subtitle = Subtitle
Card.Top = Top
Card.Bottom = Bottom

export default Card
