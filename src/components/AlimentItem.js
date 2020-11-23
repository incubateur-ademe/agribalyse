import React from 'react'
import styled from 'styled-components'

import { colors, mq } from 'utils/styles'

import Card from 'components/Card'
import Button from 'components/Button'
import DQR from 'components/DQR'

const Sizer = styled.div`
  min-height: 7em;
`
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2em;

  ${mq.small} {
    flex-direction: column;
    align-items: center;
    margin-bottom: 1em;
  }
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
  margin-right: 0.5rem;
  font-weight: 300;

  ${mq.small} {
    margin-bottom: 2em;
    text-align: center;
  }
`
const ScoreNumber = styled.span`
  display: block;
  margin-top: 0.15em;
  font-size: 60px;
  font-weight: 900;
  font-family: 'Montserrat', sans-serif;
  line-height: 0.7;
  color: ${colors.main};

  ${mq.small} {
    text-align: center;
  }
`
const Unit = styled.div`
  position: absolute;
  top: calc(100% + 0.5em);
  right: 0;
  left: 0;
  font-size: 12px;

  ${mq.small} {
    text-align: center;
  }
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
        <Sizer>
          <Title>{props.aliment['Nom_du_Produit_en_Français']}</Title>
          <Subtitle>
            <span>{props.aliment[`Sous-groupe_d'aliment`]}</span>
          </Subtitle>
        </Sizer>
      </Card.Top>
      <Card.Bottom>
        <Flex>
          <Score>
            Score
            <br />
            environnemental
            <ScoreNumber>
              {Math.round(
                props.aliment['Score_unique_EF_(mPt/kg_de_produit)'] * 100
              ) / 100}
            </ScoreNumber>
            <Unit>par kg de produit</Unit>
          </Score>
          <Button noMargin right>
            + Infos
          </Button>
        </Flex>
        <DQR
          dqr={
            props.aliment[
              'DQR_-_Note_de_qualité_de_la_donnée_(1_excellente___5_très_faible)'
            ]
          }
        />
      </Card.Bottom>
    </Card>
  )
}
