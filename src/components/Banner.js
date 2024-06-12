import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { Link, useLocation, useRouteMatch } from 'react-router-dom'

import { colors, breakpoints, mq } from 'utils/styles'
import SearchContext from 'utils/searchContext'
import useWindowSize from 'hooks/useWindowSize'

import logo from 'assets/logo.png'

import Carrot from './banner/Carrot'
import Search from './banner/Search'
import Suggestions from './banner/Suggestions'
import MobileBackButton from './banner/MobileBackButton'
import Loader from './banner/Loader'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  height: ${(props) => (props.small ? '23vw' : props.windowHeight + 'px')};
  margin-bottom: 2em;
  padding: 0 3vw;
  background-color: ${colors.main};
  transition: all 700ms ease-in-out;

  ${mq.mediumLandscape} {
    height: ${(props) => (props.small ? '5.5vw' : props.windowHeight + 'px')};
    padding: 0 ${(props) => (props.small ? '2em' : '3vw')};
  }
  ${mq.mediumPortrait} {
    height: ${(props) => (props.small ? '10vw' : props.windowHeight + 'px')};
  }
  ${mq.large} {
    height: ${(props) => (props.small ? '20vw' : props.windowHeight + 'px')};
  }
`
const ContentWrapper = styled.div`
  opacity: ${(props) => (props.visible ? 1 : 0)};
  pointer-events: ${(props) => (props.visible ? 'inherit' : 'none')};
  transition: opacity 1000ms linear 300ms;
`
const StyledLink = styled(Link)`
  text-decoration: none;

  ${mq.medium} {
    display: ${(props) => (props.small ? 'none' : 'block')};
  }
`
const Title = styled.h1`
  width: 48vw;
  margin-bottom: 2vw;
  font-size: 2.4vw;
  font-weight: 900;
  color: ${colors.white};

  ${mq.mediumPortrait} {
    width: auto;
    font-size: 4.8vw;
  }

  ${mq.small} {
    font-size: 7vw;
    text-align: center;
  }

  ${mq.large} {
    width: 40vw;
    font-size: 2vw;
  }
`
const Subtitle = styled.div`
  width: 49vw;
  margin-bottom: 2vw;
  font-size: 1vw;
  font-weight: 700;
  color: ${colors.white};
  transition: all 600ms ease-in-out;

  ${mq.medium} {
    display: ${(props) => (props.small ? 'none' : 'block')};
    width: 70vw;
  }
  ${mq.mediumPortrait} {
    width: auto;
    font-size: 2vw;
  }

  ${mq.small} {
    font-size: 3vw;
    text-align: center;
  }

  a {
    color: ${colors.white};
  }
`
const Logo = styled.img`
  position: absolute;
  top: 2vw;
  right: 2vw;
  width: 100px;
  transition: all 300ms ease-out;

  ${mq.mediumPortrait} {
    top: ${(props) => (props.small ? '2vw' : '2vw')};
    right: ${(props) => (props.small ? '2vw' : '2vw')};
    width: ${(props) => (props.small ? '6vw' : '100px')};
  }
  ${mq.mediumLandscape} {
    top: ${(props) => (props.small ? '0.5vw' : '2vw')};
    right: ${(props) => (props.small ? '0.5vw' : '2vw')};
    width: ${(props) => (props.small ? '4.5vw' : '100px')};
  }
  ${mq.small} {
    top: ${(props) => (props.small ? '1vw' : '2vw')};
    right: ${(props) => (props.small ? '1vw' : '2vw')};
    width: ${(props) => (props.small ? '8vw' : '20vw')};
  }
`

export default function Banner() {
  const windowSize = useWindowSize()

  const [loaded, setLoaded] = useState(false)
  let location = useLocation()
  useEffect(() => {
    let scrollTarget =
      window.innerWidth < breakpoints.medium
        ? 0
        : window.innerWidth < breakpoints.large
        ? 0.24
        : 0.2
    if (window.scrollY > window.innerWidth * scrollTarget) {
      window.scrollTo(0, window.innerWidth * scrollTarget)
    }
  }, [location.pathname])

  const { setSearch, setCategories, setSubCategories } =
    useContext(SearchContext)

  let resultsPage = useRouteMatch('/app/aliments/:code_agb?')
  let accessibilityPage = useRouteMatch('/accessibilite')

  const [small, setSmall] = useState(
    resultsPage?.isExact || accessibilityPage?.isExact
  )

  useEffect(() => {
    setSmall(resultsPage?.isExact || accessibilityPage?.isExact)
  }, [
    resultsPage,
    accessibilityPage,
    setSearch,
    setCategories,
    setSubCategories,
  ])

  return (
    <Wrapper windowHeight={windowSize.height} small={small}>
      <Link to="/">
        <Logo src={logo} alt={'Agribalyse'} small={small} />
      </Link>
      <Carrot small={small} />
      <ContentWrapper visible={loaded}>
        <StyledLink to="/app" small={small}>
          <Title>Explorer la base Agribalyse 3.1.1</Title>
        </StyledLink>
        <Subtitle
          small={small}
          dangerouslySetInnerHTML={{
            __html: `Cette application présente les résultats de la base de données Agribalyse, selon les indicateurs ACV. Ceci ne correspond pas à un <a href='https://www.agribalyse.fr/documentation/usage-des-donnees/information-environnementale' target='_blank'>affichage environnemental</a> ou un « éco-score » pour le grand-public.`,
          }}
        />
        <Search small={small} />
        <Suggestions small={small} setLoaded={setLoaded} />
      </ContentWrapper>

      <Loader visible={!loaded && !small} />
      <MobileBackButton small={small} />
    </Wrapper>
  )
}
