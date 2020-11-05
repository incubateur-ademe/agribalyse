import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { colors, mq } from 'utils/styles'

import Image from './card/Image'
import Legend from './card/Legend'
import Title from './card/Title'
import Subtitle from './card/Subtitle'
import Top from './card/Top'
import Bottom from './card/Bottom'

const StyledLink = styled(Link)`
  display: block;
  width: calc(${props => (props.large ? '50%' : '33.333%')} - 2em);
  margin: 0 1em 2em;
  text-decoration: none;
  border-radius: 1em;
  transition: box-shadow 150ms linear;
  opacity: ${props => (props.disabled ? 0.3 : 1)};
  pointer-events: ${props => (props.disabled ? 'none' : 'inherit')};
  transition: opacity 300ms ease-in-out;

  &:hover {
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.08), 0 0 15px 0 rgba(0, 0, 0, 0.02),
      0 0 20px 4px rgba(0, 0, 0, 0.06);
  }

  ${mq.large} {
    width: calc(
      ${props => (props.small ? '25%' : props.large ? '50%' : '33.333%')} - 2em
    );
  }
  ${mq.xlarge} {
    width: calc(
      ${props => (props.small ? '20%' : props.large ? '50%' : '33.333%')} - 2em
    );
  }
  ${mq.mediumPortrait} {
    width: calc(50% - 2em);
  }
  ${props =>
    props.small &&
    `${mq.mediumLandscape} {
      width: calc(33.333% - 2em);
    }`}
  ${mq.small} {
    width: calc(${props => (props.small ? '50%' : '100%')} - 0.8em);
    margin: 0 0.4em 0.8em;
  }
`
const StyledA = styled.a`
  display: block;
  width: calc(${props => (props.large ? '50%' : '33.333%')} - 2em);
  margin: 0 1em 2em;
  text-decoration: none;
  border-radius: 1em;
  transition: box-shadow 150ms linear;
  opacity: ${props => (props.disabled ? 0.3 : 1)};
  pointer-events: ${props => (props.disabled ? 'none' : 'inherit')};
  transition: opacity 300ms ease-in-out;

  &:hover {
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.08), 0 0 15px 0 rgba(0, 0, 0, 0.02),
      0 0 20px 4px rgba(0, 0, 0, 0.06);
  }

  ${mq.large} {
    width: calc(
      ${props => (props.small ? '25%' : props.large ? '50%' : '33.333%')} - 2em
    );
  }
  ${mq.xlarge} {
    width: calc(
      ${props => (props.small ? '20%' : props.large ? '50%' : '33.333%')} - 2em
    );
  }
  ${mq.mediumPortrait} {
    width: calc(50% - 2em);
  }
  ${props =>
    props.small &&
    `${mq.mediumLandscape} {
      width: calc(33.333% - 2em);
    }`}
  ${mq.small} {
    width: calc(${props => (props.small ? '50%' : '100%')} - 2em);
  }
`
const Wrapper = styled.div`
  display: block;
  width: calc(${props => (props.large ? '50%' : '33.333%')} - 2em);
  margin: 0 1em 2em;
  border-radius: 1em;
  opacity: ${props => (props.disabled ? 0.3 : 1)};
  pointer-events: ${props => (props.disabled ? 'none' : 'inherit')};
  transition: opacity 300ms ease-in-out;

  ${mq.large} {
    width: calc(
      ${props => (props.small ? '25%' : props.large ? '50%' : '33.333%')} - 2em
    );
  }
  ${mq.xlarge} {
    width: calc(
      ${props => (props.small ? '20%' : props.large ? '50%' : '33.333%')} - 2em
    );
  }
  ${mq.mediumPortrait} {
    width: calc(50% - 2em);
  }
  ${props =>
    props.small &&
    `${mq.mediumLandscape} {
      width: calc(33.333% - 2em);
    }`}
  ${mq.small} {
    width: calc(${props => (props.small ? '50%' : '100%')} - 2em);
  }
`
const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  background-color: ${colors.white};
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 1em;
`
const Card = function Card(props) {
  return props.to ? (
    <StyledLink
      disabled={props.disabled}
      to={props.to}
      small={props.small}
      large={props.large}
      onClick={props.onClick}
    >
      <Content>{props.children}</Content>
    </StyledLink>
  ) : props.href ? (
    <StyledA
      disabled={props.disabled}
      href={props.href}
      target='_blank'
      rel='noopener noreferrer'
      small={props.small}
      large={props.large}
    >
      <Content>{props.children}</Content>
    </StyledA>
  ) : (
    <Wrapper
      disabled={props.disabled}
      small={props.small}
      large={props.large}
      onClick={props.onClick}
    >
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
