import React from 'react'

import Card from 'components/Card'
import Step from 'components/Step'

export default function StepsCard(props) {
  return (
    <Card width={props.large ? '50%' : '33.333%'}>
      <Card.Top>
        <Card.Title>
          Impact par
          <br />
          étapes du cycle de vie
        </Card.Title>

        <Step
          value={
            props.indicateurs[
              `Score_unique_EF_(mPt_/_kg_de_produit)_-_Agriculture`
            ]
          }
          max={props.aliment['Score_unique_EF_(mPt/kg_de_produit)']}
          title={'Agriculture'}
          delay={0}
        />
        <Step
          value={
            props.indicateurs[
              `Score_unique_EF_(mPt_/_kg_de_produit)_-_Transformation`
            ]
          }
          max={props.aliment['Score_unique_EF_(mPt/kg_de_produit)']}
          title={'Transformation'}
          delay={1}
        />
        <Step
          value={
            props.indicateurs[
              `Score_unique_EF_(mPt_/_kg_de_produit)_-_Emballage`
            ]
          }
          max={props.aliment['Score_unique_EF_(mPt/kg_de_produit)']}
          title={'Emballage'}
          delay={2}
        />
        <Step
          value={
            props.indicateurs[
              `Score_unique_EF_(mPt_/_kg_de_produit)_-_Transport`
            ]
          }
          max={props.aliment['Score_unique_EF_(mPt/kg_de_produit)']}
          title={'Transport'}
          delay={3}
        />
        <Step
          value={
            props.indicateurs[
              `Score_unique_EF_(mPt_/_kg_de_produit)_-_Supermarché_et_distribution`
            ]
          }
          max={props.aliment['Score_unique_EF_(mPt/kg_de_produit)']}
          title={'Supermarché et distribution'}
          delay={4}
        />
        <Step
          value={
            props.indicateurs[
              `Score_unique_EF_(mPt_/_kg_de_produit)_-_Consommation`
            ]
          }
          max={props.aliment['Score_unique_EF_(mPt/kg_de_produit)']}
          title={'Consommation'}
          delay={5}
        />
      </Card.Top>
    </Card>
  )
}
