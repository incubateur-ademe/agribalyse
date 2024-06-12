import React from 'react'
import styled from 'styled-components'

import { colors, mq } from 'utils/styles'

import Card from 'components/Card'
import Button from 'components/Button'
import DQR from 'components/DQR'

const Flex = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`
const Title = styled.h3`
  margin-bottom: 0.3em;
  font-weight: 900;

  ${mq.small} {
    font-size: 16px;
  }
`
const Subtitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`
const Score = styled.div`
  position: relative;
  flex: 1;
  margin-bottom: 1rem;
  text-align: center;
  font-weight: 300;
`
const ScoreNumber = styled.span`
  display: block;
  font-size: 40px;
  font-weight: 900;
  font-family: 'Montserrat', sans-serif;
  color: ${colors.main};

  ${mq.small} {
    text-align: center;
  }
`
const Unit = styled.div`
`
export default function AlimentItem(props) {
  return (
    <Card
      small
      to={`/app/aliments/${props.aliment['Code_AGB']}#${props.aliment[
        'Nom_du_Produit_en_Français'
      ].replace(/ /g, '_')}`}
      disabled={props.loading}
    >
      <Card.Top>
          <Title>{props.aliment['Nom_du_Produit_en_Français']}</Title>
          <Subtitle>
            <span>{props.aliment[`Sous-groupe_d'aliment`]}</span>
          </Subtitle>
      </Card.Top>
      <Card.Bottom>
          <Score>
            <ScoreNumber>
              {Math.round(props.aliment['Changement_climatique'] * 100) / 100}
            </ScoreNumber>
            <Unit><strong>kg CO2 eq</strong> / kg de produit</Unit>
          </Score>
          <Flex>
        <Button>
            Voir le détail
          </Button></Flex>
        <DQR dqr={props.aliment['DQR']} />
      </Card.Bottom>
    </Card>
  )
}
