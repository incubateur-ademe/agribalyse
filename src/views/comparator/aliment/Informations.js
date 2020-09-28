import React from 'react'
import styled from 'styled-components'

import { mq } from 'utils/styles'

import MobileBack from './informations/MobileBack'
import EnvironmentCard from './informations/EnvironmentCard'
import StepsCard from './informations/StepsCard'
import AlimentsCard from './informations/AlimentsCard'
import Indicateurs from './informations/Indicateurs'

const Wrapper = styled.div`
  margin-bottom: 4em;
`
const Flex = styled.div`
  display: flex;
  justify-content: space-between;

  ${mq.small} {
    flex-direction: column;
  }
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
  margin-top: 0.3em;

  ${mq.small} {
    margin: 0 0 0.5em;
  }
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
      <Flex>
        <TitleWrapper>
          <MobileBack />
          <Title>{props.aliment.nom_francais}</Title>
        </TitleWrapper>
        <Ciqual>
          Code Ciqual : <Code>{props.aliment.ciqual_code}</Code>
        </Ciqual>
      </Flex>
      <Category>
        <b>
          {props.aliment.sous_groupe.charAt(0).toUpperCase() +
            props.aliment.sous_groupe.slice(1)}
        </b>{' '}
        (
        {props.aliment.groupe.charAt(0).toUpperCase() +
          props.aliment.groupe.slice(1)}
        )
      </Category>
      <Cards>
        <EnvironmentCard
          aliment={props.aliment}
          large={
            !props.aliment['impact_environnemental']['Score unique EF'][
              'ingredients'
            ]
          }
        />
        <StepsCard
          aliment={props.aliment}
          large={
            !props.aliment['impact_environnemental']['Score unique EF'][
              'ingredients'
            ]
          }
        />
        {props.aliment['impact_environnemental']['Score unique EF'][
          'ingredients'
        ] && <AlimentsCard aliment={props.aliment} />}
      </Cards>
      <Indicateurs aliment={props.aliment} />
    </Wrapper>
  )
}
