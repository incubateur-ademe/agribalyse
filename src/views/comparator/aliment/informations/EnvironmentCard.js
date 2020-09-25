import React from 'react'
import styled from 'styled-components'
import CountUp from 'react-countup'

import { colors } from 'utils/styles'

import Card from 'components/Card'
import Callout from 'components/Callout'

const Score = styled.div`
  margin-top: 0.3em;
  font-size: 7vw;
  font-weight: 900;
  font-family: 'Montserrat', sans-serif;
  text-align: center;

  span {
    color: ${colors.main};
  }
`
const CO2 = styled.div`
  font-size: 18px;
  text-align: center;
`
const CO2Number = styled.span`
  font-weight: 900;
`
const DQR = styled.div`
  margin-bottom: 1em;
  font-size: 14px;
  text-align: center;
`
const DQRNumber = styled.span`
  font-weight: 900;
`
export default function EnvironmentCard(props) {
  return (
    <Card width='33%'>
      <Card.Top>
        <Card.Title>
          Score environnemental
          <br />
          multi-indicateurs
        </Card.Title>
        <Score>
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
        <CO2>
          <CO2Number>
            {
              props.aliment['impact_environnemental']['Changement climatique'][
                'synthese'
              ]
            }
          </CO2Number>{' '}
          kg CO2 eq/kg de produit
        </CO2>
      </Card.Top>
      <Card.Bottom>
        <DQR>
          Niveau de fiabilité de la donnée :{' '}
          <DQRNumber>{props.aliment['DQR']['overall']}/5</DQRNumber>
        </DQR>
        <Callout>
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
