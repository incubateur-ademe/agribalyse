import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { colors, mq } from 'utils/styles'

const Wrapper = styled.table`
  border-collapse: collapse;
  margin: 0 0 2em;

  ${mq.small} {
    width: 100%;
    table-layout: fixed;
  }
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
export default function Indicateurs(props) {
  const [indicateurs, setIndicateurs] = useState([])

  useEffect(() => {
    let tempIndicateurs = []
    for (const property in props.aliment.impact_environnemental) {
      tempIndicateurs.push({
        name: property,
        synthese: props.aliment.impact_environnemental[property]['synthese'],
        unite: props.aliment.impact_environnemental[property]['unite']
      })
    }
    setIndicateurs(tempIndicateurs)
  }, [props.aliment])

  return (
    <Wrapper>
      <thead>
        <Row>
          <Head>Indicateur</Head>
          <Head right>Mesure</Head>
          <Head>Unité</Head>
        </Row>
      </thead>
      <tbody>
        {indicateurs.map(indicateur => (
          <Row key={indicateur.name}>
            <Cell>{indicateur.name}</Cell>
            <Cell>
              <Value>{indicateur.synthese}</Value>
            </Cell>
            <Cell>{indicateur.unite}</Cell>
          </Row>
        ))}
      </tbody>
    </Wrapper>
  )
}
