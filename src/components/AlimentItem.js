import React from 'react'
import styled from 'styled-components'

import { colors } from 'utils/styles'

import Card from 'components/Card'
import Button from 'components/Button'

const Sizer = styled.div`
  min-height: 7em;
`
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 2em;
`
const Subtitle = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 300;
`
const Score = styled.div`
  flex: 1;
  margin-right: 0.5rem;
  font-weight: 300;
`
const ScoreNumber = styled.span`
  display: block;
  margin-top: 0.15em;
  font-size: 60px;
  font-weight: 900;
  font-family: 'Montserrat', sans-serif;
  line-height: 0.7;
  color: ${colors.main};
`
const Fiability = styled.div`
  line-height: 1.3;
  text-align: center;
`
const DQR = styled.div`
  font-size: 18px;
  text-align: center;
`
const DQRNumber = styled.span`
  font-weight: 900;
`
export default function AlimentItem(props) {
  return (
    <Card to={`/aliments/${props.aliment.ciqual_code}`}>
      <Card.Top>
        <Sizer>
          <Card.Title>{props.aliment.nom_francais}</Card.Title>
          <Subtitle>
            <span>{props.aliment.sous_groupe}</span>
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
              {
                props.aliment['impact_environnemental']['Score unique EF'][
                  'synthese'
                ]
              }
            </ScoreNumber>
          </Score>
          <Button noMargin right>
            + Infos
          </Button>
        </Flex>

        <Fiability>
          Donnée fiable à{' '}
          <b>
            {Math.floor(((props.aliment['DQR']['overall'] - 1) * 100) / 4)}%
          </b>
          <DQR>
            (DQR : <DQRNumber>{props.aliment['DQR']['overall']}</DQRNumber>)
          </DQR>
        </Fiability>
      </Card.Bottom>
    </Card>
  )
}
