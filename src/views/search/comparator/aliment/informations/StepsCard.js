import React, { useState } from 'react'

import Card from 'components/Card'
import Step from 'components/Step'
import { colors } from 'utils/styles'
import styled from 'styled-components'

const Pef = styled.span`
  position: relative;
  cursor: pointer;
  color: ${colors.main};
  text-decoration: underline;
`
const Tooltip = styled.div`
  position: absolute;
  bottom: calc(100%);
  left: -3rem;
  width: 15rem;

  padding: 1em;
  font-size: 14px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  background: ${colors.lightSecondary};
  box-shadow: ${(props) =>
    `0 0 8px 0 rgba(0, 0, 0, 0.08), 0 0 15px 0 rgba(0, 0, 0, 0.02),
      0 0 20px 4px rgba(0, 0, 0, 0.06)`};
  opacity: ${(props) => (props.visible ? 1 : 0)};
  pointer-events: ${(props) => (props.visible ? 'inherit' : 'none')};
  transition: opacity 300ms ease-out;
`

export default function StepsCard(props) {
  const [visible, setVisible] = useState(false)

  return (
    <Card large={props.large}>
      <Card.Top>
        <Card.Title>
          Impact{' '}
          <Pef
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}>
            (Score Unique PEF)
            <Tooltip
              visible={visible}
              onMouseEnter={() => setVisible(true)}
              onMouseLeave={() => setVisible(false)}>
              Sans unité,{' '}
              <b>
                plus le score est bas plus son impact sur l'environnement est
                faible
              </b>
              . Ce score unique est une moyenne pondérée des{' '}
              <b>16 indicateurs</b> (voir tableau ci-dessous), calculé selon la
              méthodologie européenne « PEF »{' '}
              <b>(Product Environmental Footprint)</b>.
            </Tooltip>
          </Pef>{' '}
          par
          <br />
          étapes du cycle de vie
        </Card.Title>

        <Step
          value={props.indicateurs[`Score_unique_EF_-_Agriculture`]}
          max={props.aliment['Score_unique_EF']}
          title={'Agriculture'}
          delay={0}
        />
        <Step
          value={props.indicateurs[`Score_unique_EF_-_Transformation`]}
          max={props.aliment['Score_unique_EF']}
          title={'Transformation'}
          delay={1}
        />
        <Step
          value={props.indicateurs[`Score_unique_EF_-_Emballage`]}
          max={props.aliment['Score_unique_EF']}
          title={'Emballage'}
          delay={2}
        />
        <Step
          value={props.indicateurs[`Score_unique_EF_-_Transport`]}
          max={props.aliment['Score_unique_EF']}
          title={'Transport'}
          delay={3}
        />
        <Step
          value={
            props.indicateurs[`Score_unique_EF_-_Supermarché_et_distribution`]
          }
          max={props.aliment['Score_unique_EF']}
          title={'Supermarché et distribution'}
          delay={4}
        />
        <Step
          value={props.indicateurs[`Score_unique_EF_-_Consommation`]}
          max={props.aliment['Score_unique_EF']}
          title={'Consommation'}
          delay={5}
        />
      </Card.Top>
    </Card>
  )
}
