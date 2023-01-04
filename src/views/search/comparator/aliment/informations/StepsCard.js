import React from 'react'

import Card from 'components/Card'
import Step from 'components/Step'

export default function StepsCard(props) {
  return (
    <Card large={props.large}>
      <Card.Top>
        <Card.Title>
          Impact par
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
