import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Link, useLocation, useRouteMatch } from 'react-router-dom'

import { colors, mq } from 'utils/styles'
import useWindowSize from 'hooks/useWindowSize'
import logo from 'assets/logo.png'
import Carrot from './banner/Carrot'
import Search from './banner/Search'
import Suggestions from './banner/Suggestions'
import MouseIndicator from './banner/MouseIndicator'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  height: ${props => (props.small ? '24vw' : props.windowHeight + 'px')};
  margin-bottom: 2em;
  padding: 0 3vw;
  background-color: ${colors.main};
  transition: all 700ms ease-in-out;

  ${mq.medium} {
    transition: all 300ms ease-in-out;
  }
  ${mq.mediumLandscape} {
    height: ${props => (props.small ? '5.5vw' : props.windowHeight + 'px')};
    padding: 0 ${props => (props.small ? '2em' : '3vw')};
  }
  ${mq.mediumPortrait} {
    height: ${props => (props.small ? '10vw' : props.windowHeight + 'px')};
  }
`
const ContentWrapper = styled.div`
  opacity: ${props => (props.visible ? 1 : 0)};
  pointer-events: ${props => (props.visible ? 'inherit' : 'none')};
  transition: opacity 1000ms linear 300ms;
`
const StyledLink = styled(Link)`
  text-decoration: none;

  ${mq.medium} {
    display: ${props => (props.small ? 'none' : 'block')};
  }
`
const Title = styled.h1`
  width: 48vw;
  font-size: 2.4vw;
  font-weight: 900;
  color: ${colors.white};

  ${mq.mediumPortrait} {
    width: auto;
    font-size: 4.8vw;
  }
`
const Logo = styled.img`
  position: absolute;
  top: 2vw;
  right: 2vw;
  width: 100px;
  transition: all 300ms ease-out;

  ${mq.mediumPortrait} {
    top: ${props => (props.small ? '2vw' : '2vw')};
    right: ${props => (props.small ? '2vw' : '2vw')};
    width: ${props => (props.small ? '6vw' : '100px')};
  }
  ${mq.mediumLandscape} {
    top: ${props => (props.small ? '0.5vw' : '2vw')};
    right: ${props => (props.small ? '0.5vw' : '2vw')};
    width: ${props => (props.small ? '4.5vw' : '100px')};
  }
`
const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 4vw;
  font-weight: 900;
  color: ${colors.white};
  opacity: ${props => (props.visible ? 1 : 0)};
  pointer-events: none;
  transition: opacity 500ms linear;
`
export default function Banner(props) {
  let location = useLocation()

  const windowSize = useWindowSize()

  let resultsPage = useRouteMatch('/aliments/:ciqual_code?')

  let presentationPage = useRouteMatch('/presentation')

  useEffect(() => {
    if (window.scrollY > windowSize.width * 0.24) {
      window.scrollTo(0, windowSize.width * 0.24)
    }
  }, [location, windowSize])

  const [small, setSmall] = useState(
    resultsPage && resultsPage.isExact && props.aliments.length
  )
  useEffect(() => {
    setSmall(resultsPage && resultsPage.isExact && props.aliments.length)
  }, [resultsPage, props.aliments])

  return (
    <Wrapper windowHeight={windowSize.height} small={small}>
      <Link to='/'>
        <Logo src={logo} alt={'Agrybalise'} small={small} />
      </Link>
      <Carrot small={small} visible={props.aliments.length} />
      <MouseIndicator
        visible={
          props.aliments.length && presentationPage && presentationPage.isExact
        }
      />
      <ContentWrapper visible={props.aliments.length}>
        <StyledLink to='/' small={small}>
          <Title>Découvrez l’impact environnemental de votre assiette</Title>
        </StyledLink>
        <Search small={small} />
        <Suggestions small={small} aliments={props.aliments} />
      </ContentWrapper>
      <Loader visible={!props.aliments.length}>Chargement...</Loader>
    </Wrapper>
  )
}
