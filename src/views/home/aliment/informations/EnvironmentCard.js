import React from 'react'
import styled from 'styled-components'

import { colors } from 'utils/styles'

import Card from 'components/Card'
import Callout from 'components/Callout'

const Score = styled.div`
  margin-top: 0.3em;
  font-size: 7vw;
  font-weight: 900;
  color: ${colors.main};
  text-align: center;
`
const CO2 = styled.div`
  font-size: 18px;
  text-align: center;
`
export default function EnvironmentCard(props) {
  return (
    <Card width='33%'>
      <Card.Top>
        <Card.Title>Score environnemental multi-indicateurs</Card.Title>
        <Score>
          {
            props.aliment['impact_environnemental']['Score unique EF'][
              'synthese'
            ]
          }
        </Score>
        <CO2>
          {
            props.aliment['impact_environnemental']['Changement climatique'][
              'synthese'
            ]
          }{' '}
          kg CO2 eq/kg de produit
        </CO2>
      </Card.Top>
      <Card.Bottom>
        <Callout>
          <h5>Détail de la pondération des indicateurs</h5>
          <p>
            Sans unité, plus le score est bas plus son impact sur
            l'environnement est faible. Ce score unique est une moyenne pondérée
            des 14 indicateurs, calculé selon la méthodologie européenne « PEF »
            (Product Environmental Footprint)
          </p>
        </Callout>
      </Card.Bottom>
    </Card>
  )
}
