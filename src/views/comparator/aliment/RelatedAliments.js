import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { colors, breakpoints, mq } from 'utils/styles'
import useWindowSize from 'hooks/useWindowSize'
import AlimentItem from 'components/AlimentItem'

const Wrapper = styled.div`
  padding: 2em;
  background-color: ${colors.lightMain};

  ${mq.small} {
    margin: 0 -1em;
    padding: 2em 1em;
  }
`
const Aliments = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1em;
`
const Title = styled.h3``
export default function RelatedAliments(props) {
  const [numRelatedAliments, setnumRelatedAliments] = useState(0)
  const windowSize = useWindowSize()
  useEffect(() => {
    setnumRelatedAliments(
      windowSize.width < breakpoints.small
        ? 3
        : windowSize.width < breakpoints.mediumPortrait
        ? 4
        : windowSize.width < breakpoints.xlarge
        ? 3
        : 5
    )
  }, [windowSize])

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
