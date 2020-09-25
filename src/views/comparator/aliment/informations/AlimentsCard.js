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
const Head = styled.th`
  padding: 1em;
  text-align: ${props => (props.right ? 'right' : 'left')};
`
const Cell = styled.td`
  padding: 1em;
`
const Value = styled.div`
  font-weight: 900;
  font-family: 'Montserrat', sans-serif;
  text-align: right;
`

export default function StepsCard(props) {
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
    <Card width='33%'>
      <Card.Top>
        <Card.Title>Impact par ingrédients</Card.Title>
        <Table>
          <Row>
            <Head>Ingredient</Head>
            <Head right>Valeur</Head>
          </Row>
          {ingredients.map(ingredient => (
            <Row>
              <Cell>{ingredient.name}</Cell>
              <Cell>
                <Value>{ingredient.value}</Value>
              </Cell>
            </Row>
          ))}
        </Table>
      </Card.Top>
    </Card>
  )
}
