import React from 'react'
import styled from 'styled-components'

import { colors, breakpoints } from 'utils/styles'
import useWindowSize from 'hooks/useWindowSize'

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
export default function AlimentItem(props) {
  const windowSize = useWindowSize()
  return (
    <Card
      width={windowSize.width < breakpoints.large ? '33.33%' : '25%'}
      to={`/aliments/${props.aliment.ciqual_code}`}
    >
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
        <DQR dqr={props.aliment['DQR']['overall']} />
      </Card.Bottom>
    </Card>
  )
}
