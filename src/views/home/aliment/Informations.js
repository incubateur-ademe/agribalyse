import React from 'react'
import styled from 'styled-components'

import EnvironmentCard from './informations/EnvironmentCard'
import StepsCard from './informations/StepsCard'
import ExplanationsCard from './informations/ExplanationsCard'
import Indicateurs from './informations/Indicateurs'

const Wrapper = styled.div`
  margin-bottom: 4em;
`
const Title = styled.h1``
const Category = styled.p``
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 1em 2em;
`
export default function Informations(props) {
  return (
    <Wrapper>
      <Title>{props.aliment.nom_francais}</Title>
      <Category>
        {props.aliment.sous_groupe} ({props.aliment.groupe})
      </Category>
      <Cards>
        <EnvironmentCard aliment={props.aliment} />
        <StepsCard aliment={props.aliment} />
        <ExplanationsCard aliment={props.aliment} />
      </Cards>
      <Indicateurs aliment={props.aliment} />
    </Wrapper>
  )
}
