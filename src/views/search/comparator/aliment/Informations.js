import React from 'react'
import styled from 'styled-components'

import { mq } from 'utils/styles'

import MobileBack from './informations/MobileBack'
import EnvironmentCard from './informations/EnvironmentCard'
import StepsCard from './informations/StepsCard'
import IngredientsCard from './informations/IngredientsCard'
import Indicateurs from './informations/Indicateurs'

const Wrapper = styled.div`
  margin-bottom: 4em;
`
const TitleWrapper = styled.div`
  flex: 1;
  display: flex;
`
const Title = styled.h1`
  max-width: 800px;
  font-size: 40px;
  font-weight: 900;

  ${mq.small} {
    font-size: 32px;
  }
`
const Ciqual = styled.div`
  margin-bottom: 1em;
`
const Code = styled.span`
  font-weight: 900;
`
const Category = styled.p`
  ${mq.small} {
    margin-bottom: 2em;
  }
`
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1em 2em;
`
export default function Informations(props) {
  return (
    <Wrapper>
      <TitleWrapper>
        <MobileBack />
        <Title>{props.aliment[`Nom_du_Produit_en_Français`]}</Title>
      </TitleWrapper>
      <Ciqual>
        Code Ciqual : <Code>{props.aliment['Code_CIQUAL']}</Code>
      </Ciqual>
      <Category>
        <b>
          {props.aliment[`Sous-groupe_d'aliment`].charAt(0).toUpperCase() +
            props.aliment[`Sous-groupe_d'aliment`].slice(1)}
        </b>{' '}
        (
        {props.aliment[`Groupe_d'aliment`].charAt(0).toUpperCase() +
          props.aliment[`Groupe_d'aliment`].slice(1)}
        )
      </Category>
      <Cards>
        <EnvironmentCard
          aliment={props.aliment}
          large={!props.ingredients.length}
        />
        <StepsCard
          aliment={props.aliment}
          indicateurs={props.indicateurs}
          large={!props.ingredients.length}
        />
        {props.ingredients.length ? (
          <IngredientsCard
            aliment={props.aliment}
            ingredients={props.ingredients}
          />
        ) : (
          ''
        )}
      </Cards>
      <Indicateurs aliment={props.aliment} indicateurs={props.indicateurs} />
    </Wrapper>
  )
}
