import React from 'react'
import styled from 'styled-components'

import Search from './banner/Search'
import Suggestions from './banner/Suggestions'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 25vw;
  margin-bottom: 2em;
  padding: 2vw;
  background-color: red;
  background-image: url('https://fakeimg.pl/2500x1000/FFD97D/');
  background-position: center top;
  background-size: contain;
  background-attachment: fixed;
`
const Title = styled.h1`
  width: 48vw;
  font-size: 3vw;
  font-weight: black;
`
export default function Banner(props) {
  return (
    <Wrapper>
      <Title>Découvrez l’impact environnemental de votre assiette</Title>
      <Search />
      <Suggestions aliments={props.aliments} />
    </Wrapper>
  )
}
