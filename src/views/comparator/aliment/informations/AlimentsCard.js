import React, { useState, useEffect } from 'react'

import Card from 'components/Card'
import Step from 'components/Step'

export default function AlimentsCard(props) {
  const [ingredients, setIngredients] = useState([])

  useEffect(() => {
    let tempIngredients = []
    for (const property in props.aliment['impact_environnemental'][
      'Score unique EF'
    ]['ingredients']) {
      tempIngredients.push({
        name: property,
        value:
          props.aliment['impact_environnemental']['Score unique EF'][
            'ingredients'
          ][property]
      })
    }
    setIngredients(tempIngredients)
  }, [props.aliment])

  return (
    <Card>
      <Card.Top>
        <Card.Title>
          Impact par
          <br />
          ingrédients
        </Card.Title>
        {ingredients.map((ingredient, index) => (
          <Step
            key={ingredient.name}
            value={ingredient.value}
            max={
              props.aliment['impact_environnemental']['Score unique EF'][
                'synthese'
              ]
            }
            title={ingredient.name}
            delay={index + 6}
            secondary
          />
        ))}
      </Card.Top>
    </Card>
  )
}
