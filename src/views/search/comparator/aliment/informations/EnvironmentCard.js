import React from 'react'
import styled from 'styled-components'
import CountUp from 'react-countup'

import { colors, mq } from 'utils/styles'

import Card from 'components/Card'
import DQR from 'components/DQR'

const Score = styled.div`
  margin: 2em 0 3em;
  text-align: center;

  span {
    font-size: ${(props) => (props.large ? '11vw' : '7vw')};
    font-weight: 900;
    font-family: 'Montserrat', sans-serif;
    color: ${colors.main};

    ${mq.mediumPortrait} {
      font-size: 12vw;
    }
    ${mq.small} {
      font-size: 30vw;
    }
    ${mq.large} {
      font-size: ${(props) => (props.large ? '150px' : '120px')};
    }
  }
`
const Unit = styled.div`
  font-size: 18px;
  text-align: center;
`
export default function EnvironmentCard(props) {
  return (
    <Card large={props.large}>
      <Card.Top>
        <Card.Title>Changement climatique</Card.Title>
        <Score large={props.large}>
          <CountUp
            end={Math.round(props.aliment['Changement_climatique'] * 100) / 100}
            decimals={2}
            duration={1}
            delay={0.25}
            useEasing={false}
          />
          <Unit><strong>kg CO2 eq</strong> / kg de produit</Unit>
        </Score>
        
        <DQR large dqr={props.aliment['DQR']} />
      </Card.Top>
    </Card>
  )
}
