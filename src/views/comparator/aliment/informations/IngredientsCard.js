import React from 'react'

import Card from 'components/Card'
import Step from 'components/Step'

export default function IngredientsCard(props) {
  return (
    <Card>
      <Card.Top>
        <Card.Title>
          Impact par
          <br />
          ingrédients
        </Card.Title>
        {props.ingredients.map((ingredient, index) => (
          <Step
            key={ingredient['Ingredients']}
            value={ingredient[`Score_unique_EF_(mPt/kg_de_produit)`]}
            max={props.aliment['Score_unique_EF_(mPt/kg_de_produit)']}
            title={ingredient['Ingredients']}
            delay={index + 6}
            secondary
          />
        ))}
      </Card.Top>
    </Card>
  )
}
