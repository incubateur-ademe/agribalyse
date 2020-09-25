import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { colors } from 'utils/styles'
import AlimentItem from 'components/AlimentItem'

const Wrapper = styled.div`
  padding: 2em;
  background-color: ${colors.lightMain};
`
const Aliments = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1em;
`
const Title = styled.h3``
export default function RelatedAliments(props) {
  const numRelatedAliments = 3

  const [relatedAliments, setRelatedAliments] = useState([])

  useEffect(() => {
    let tempsAliments = [
      ...props.aliments.filter(
        aliment => aliment.groupe === props.aliment.groupe
      )
    ]
    let tempsRelatedAliments = []

    for (let i = 0; i < numRelatedAliments; i++) {
      const index = Math.floor(Math.random() * tempsAliments.length)
      tempsRelatedAliments.push(tempsAliments[index])
      tempsAliments.splice(index, 1)
    }
    setRelatedAliments(tempsRelatedAliments)
  }, [props.aliments, props.aliment, numRelatedAliments])

  return (
    <Wrapper>
      <Title>Produit de la même catégorie ({props.aliment.groupe})</Title>
      <Aliments>
        {relatedAliments.map(
          aliment =>
            aliment && (
              <AlimentItem key={aliment.ciqual_code} aliment={aliment} />
            )
        )}
      </Aliments>
    </Wrapper>
  )
}
