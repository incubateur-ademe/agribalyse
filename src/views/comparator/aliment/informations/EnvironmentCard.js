import React from 'react'
import styled from 'styled-components'
import CountUp from 'react-countup'

import { colors, mq } from 'utils/styles'

import Card from 'components/Card'
import Callout from 'components/Callout'
import DQR from 'components/DQR'

const Score = styled.div`
  margin: ${props => (props.large ? '0.1em' : '0.3em 0 0.4em')};
  font-size: ${props => (props.large ? '11vw' : '7vw')};
  font-weight: 900;
  font-family: 'Montserrat', sans-serif;
  text-align: center;

  span {
    color: ${colors.main};
  }

  ${mq.mediumPortrait} {
    font-size: 12vw;
  }
  ${mq.small} {
    font-size: 30vw;
  }
`
const CO2 = styled.div`
  font-size: 18px;
  text-align: center;
`
const CO2Title = styled.h5`
  margin-bottom: 0.2em;
`
const CO2Number = styled.span`
  font-weight: 900;
`
export default function EnvironmentCard(props) {
  return (
    <Card width={props.large ? '50%' : '33.333%'}>
      <Card.Top>
        <Card.Title>Score environnemental "PEF"</Card.Title>
        <Score large={props.large}>
          <CountUp
            end={Number(
              props.aliment['impact_environnemental']['Score unique EF'][
                'synthese'
              ]
            )}
            decimals={2}
            duration={1}
            delay={0.25}
            useEasing={false}
          />
        </Score>

        <Callout>
          <p>
            Sans unité,{' '}
            <b>
              plus le score est bas plus son impact sur l'environnement est
              faible
            </b>
            . Ce score unique est une moyenne pondérée des <b>14 indicateurs</b>{' '}
            (voir tableau ci-dessous), calculé selon la méthodologie européenne
            « PEF » <b>(Product Environmental Footprint)</b>.
          </p>
        </Callout>
        <DQR large dqr={props.aliment['DQR']['overall']} />
      </Card.Top>
      <Card.Bottom>
        <CO2>
          <CO2Title>Détail changement climatique :</CO2Title>
          <CO2Number>
            {
              props.aliment['impact_environnemental']['Changement climatique'][
                'synthese'
              ]
            }
          </CO2Number>{' '}
          kg CO2 eq/kg de produit
        </CO2>
      </Card.Bottom>
    </Card>
  )
}
