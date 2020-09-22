import React from 'react'
import styled from 'styled-components'

import { colors } from 'utils/styles'

import Card from 'components/Card'
import Button from 'components/Button'
import Callout from 'components/Callout'

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 1em;
`
const ScoreWrapper = styled.div`
  flex: 1;
  margin-right: 0.5rem;
`
const ScoreTitle = styled.h4`
  margin: 0;
  color: ${colors.text};
`
const Score = styled.div`
  font-size: 32px;
  font-weight: 900;
`
export default function AlimentItem(props) {
  return (
    <Card width='33%' to={`/aliments/${props.aliment.ciqual_code}`}>
      <Card.Top>
        <Card.Title>{props.aliment.nom_francais}</Card.Title>
        <Card.Subtitle>{props.aliment.sous_groupe}</Card.Subtitle>
      </Card.Top>
      <Card.Bottom>
        <Flex>
          <ScoreWrapper>
            <ScoreTitle>Score environnemental</ScoreTitle>
            <Score>
              {
                props.aliment['impact_environnemental']['Score unique EF'][
                  'synthese'
                ]
              }
            </Score>
          </ScoreWrapper>
          <Button noMargin right>
            + Infos
          </Button>
        </Flex>

        <Callout>
          Détail impact CO2 :{' '}
          {
            props.aliment['impact_environnemental']['Changement climatique'][
              'synthese'
            ]
          }{' '}
          kg CO2 eq/kg de produit
        </Callout>
      </Card.Bottom>
    </Card>
  )
}
