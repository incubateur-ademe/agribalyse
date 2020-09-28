import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { colors } from 'utils/styles'
import Card from 'components/Card'

const Table = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin: 0;
`
const Row = styled.tr`
  &:nth-child(2n) {
    background-color: ${colors.lightMain};
  }
`
const Cell = styled.td`
  padding: 1em;
`
const Value = styled.div`
  font-weight: 900;
  font-family: 'Montserrat', sans-serif;
  text-align: right;
`

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
        <Table>
          <tbody>
            {ingredients.map(ingredient => (
              <Row key={ingredient.name}>
                <Cell>{ingredient.name}</Cell>
                <Cell>
                  <Value>
                    {Math.round(
                      (ingredient.value /
                        props.aliment['impact_environnemental'][
                          'Score unique EF'
                        ]['synthese']) *
                        1000
                    ) / 10}
                    %
                  </Value>
                </Cell>
              </Row>
            ))}
          </tbody>
        </Table>
      </Card.Top>
    </Card>
  )
}
