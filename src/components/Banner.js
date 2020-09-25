import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Link, useLocation } from 'react-router-dom'

import { colors } from 'utils/styles'
import banner from 'assets/banner.jpg'
import logo from 'assets/logo.png'
import Search from './banner/Search'
import Suggestions from './banner/Suggestions'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2em;
  padding: 4vw 3vw 3vw;
  background-image: url(${banner});
  background-size: cover;
  background-position: center bottom;
`
const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`
const Title = styled.h1`
  width: 48vw;
  font-size: 2.4vw;
  font-weight: 900;
  color: ${colors.main};
  text-shadow: 0 0 12px rgba(255, 255, 255, 0.6);
`
const Logo = styled.img`
  width: 100px;
`
export default function Banner(props) {
  let location = useLocation()

  const wrapper = React.createRef()

  useEffect(() => {
    if (wrapper) {
      if (window.scrollY > wrapper.current.clientHeight) {
        window.scrollTo(0, wrapper.current.clientHeight)
      }
    }
  }, [location, wrapper])

  return (
    <Wrapper ref={wrapper}>
      <Content>
        <Title>Découvrez l’impact environnemental de votre assiette</Title>
        <Search />
        <Suggestions aliments={props.aliments} />
      </Content>
      <Link to='/'>
        <Logo src={logo} alt={'Agrybalise'} />
      </Link>
    </Wrapper>
  )
}
