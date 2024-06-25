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
export default function IngredientsCard(props) {
  const [visible, setVisible] = useState(false)
  return (
    <Card>
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
          ingrédients
        </Card.Title>
        {props.ingredients.map((ingredient, index) => (
          <Step
            key={ingredient['Ingredients']}
            value={ingredient[`Score_unique_EF`]}
            max={props.aliment['Score_unique_EF']}
            title={ingredient['Ingredients']}
            delay={index + 6}
            secondary
          />
        ))}
      </Card.Top>
    </Card>
  )
}
