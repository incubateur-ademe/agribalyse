import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link, useLocation, useRouteMatch } from 'react-router-dom'

import { colors } from 'utils/styles'
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
  /*background: linear-gradient(
    0deg,
    ${colors.white} 0%,
    ${colors.main} 70%,
    ${colors.main} 100%
  );
  background: linear-gradient(
    0deg,
    rgba(235, 91, 37, 0.7) 0%,
    rgba(235, 91, 37, 1) 100%
  );*/

  transition: all 700ms ease-in-out;
`
const ContentWrapper = styled.div`
  opacity: ${props => (props.visible ? 1 : 0)};
  pointer-events: ${props => (props.visible ? 'inherit' : 'none')};
  transition: opacity 1000ms linear 300ms;
`
const StyledLink = styled(Link)`
  text-decoration: none;
`
const Title = styled.h1`
  width: 48vw;
  font-size: 2.4vw;
  font-weight: 900;
  color: ${colors.white};
`
const Logo = styled.img`
  position: absolute;
  top: 2em;
  right: 2em;
  width: 100px;
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

  let match = useRouteMatch('/aliments/:ciqual_code?')

  useEffect(() => {
    if (window.scrollY > windowSize.width * 0.24) {
      window.scrollTo(0, windowSize.width * 0.24)
    }
  }, [location, windowSize])

  return (
    <Wrapper
      windowHeight={windowSize.height}
      small={match && match.isExact && props.aliments.length}
    >
      <Link to='/'>
        <Logo src={logo} alt={'Agrybalise'} />
      </Link>
      <Carrot
        small={match && match.isExact && props.aliments.length}
        visible={props.aliments.length}
      />
      <MouseIndicator
        visible={props.aliments.length && !(match && match.isExact)}
      />
      <ContentWrapper visible={props.aliments.length}>
        <StyledLink to='/'>
          <Title>Découvrez l’impact environnemental de votre assiette</Title>
        </StyledLink>
        <Search />
        <Suggestions aliments={props.aliments} />
      </ContentWrapper>
      <Loader visible={!props.aliments.length}>Chargement...</Loader>
    </Wrapper>
  )
}
