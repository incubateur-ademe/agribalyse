import React from 'react'
import styled from 'styled-components'

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
`
const Title = styled.h1`
  max-width: 800px;
  font-size: 40px;
  font-weight: 900;
`
const Ciqual = styled.div`
  margin-top: 0.3em;
`
const Code = styled.span`
  font-weight: 900;
`
const Category = styled.p``
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1em 2em;
`
export default function Informations(props) {
  return (
    <Wrapper>
      <Flex>
        <Title>{props.aliment.nom_francais}</Title>
        <Ciqual>
          Code Ciqual : <Code>{props.aliment.ciqual_code}</Code>
        </Ciqual>
      </Flex>
      <Category>
        {props.aliment.sous_groupe} ({props.aliment.groupe})
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
