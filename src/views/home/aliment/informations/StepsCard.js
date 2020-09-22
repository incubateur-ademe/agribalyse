import React from 'react'

import Card from 'components/Card'
import Step from './stepsCard/Step'

export default function StepsCard(props) {
  return (
    <Card width='33%'>
      <Card.Top>
        <Card.Title>Impact par étapes du cycle de vie</Card.Title>
      </Card.Top>
      <Card.Bottom>
        <Step
          value={
            props.aliment['impact_environnemental']['Score unique EF'][
              'etapes'
            ]['Agriculture']
          }
          max={
            props.aliment['impact_environnemental']['Score unique EF'][
              'synthese'
            ]
          }
          title={'Agriculture'}
          delay={0}
        />
        <Step
          value={
            props.aliment['impact_environnemental']['Score unique EF'][
              'etapes'
            ]['Transformation']
          }
          max={
            props.aliment['impact_environnemental']['Score unique EF'][
              'synthese'
            ]
          }
          title={'Transformation'}
          delay={1}
        />
        <Step
          value={
            props.aliment['impact_environnemental']['Score unique EF'][
              'etapes'
            ]['Emballage']
          }
          max={
            props.aliment['impact_environnemental']['Score unique EF'][
              'synthese'
            ]
          }
          title={'Emballage'}
          delay={2}
        />
        <Step
          value={
            props.aliment['impact_environnemental']['Score unique EF'][
              'etapes'
            ]['Transport']
          }
          max={
            props.aliment['impact_environnemental']['Score unique EF'][
              'synthese'
            ]
          }
          title={'Transport'}
          delay={3}
        />
        <Step
          value={
            props.aliment['impact_environnemental']['Score unique EF'][
              'etapes'
            ]['Supermarché et distribution']
          }
          max={
            props.aliment['impact_environnemental']['Score unique EF'][
              'synthese'
            ]
          }
          title={'Supermarché et distribution'}
          delay={4}
        />
        <Step
          value={
            props.aliment['impact_environnemental']['Score unique EF'][
              'etapes'
            ]['Consommation']
          }
          max={
            props.aliment['impact_environnemental']['Score unique EF'][
              'synthese'
            ]
          }
          title={'Consommation'}
          delay={5}
        />
      </Card.Bottom>
    </Card>
  )
}
