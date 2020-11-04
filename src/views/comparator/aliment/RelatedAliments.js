import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { colors, breakpoints, mq } from 'utils/styles'
import api from 'utils/api'
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
  const [numRelatedAliments, setnumRelatedAliments] = useState(4)
  const windowSize = useWindowSize()
  useEffect(() => {
    /*setnumRelatedAliments(
      windowSize.width < breakpoints.small
        ? 3
        : windowSize.width < breakpoints.mediumPortrait
        ? 4
        : windowSize.width < breakpoints.large
        ? 3
        : 4
    )*/
  }, [windowSize])

  const [alimentsOfSameGroup, setAlimentsOfSameGroup] = useState([])
  useEffect(() => {
    api
      .fetchAliments({ categories: [props.aliment[`Groupe_d'aliment`]] })
      .then(aliments => setAlimentsOfSameGroup(aliments.results))
  }, [props.aliment])

  const [relatedAliments, setRelatedAliments] = useState([])
  useEffect(() => {
    if (alimentsOfSameGroup) {
      let tempsAlimentsOfSameGroup = [...alimentsOfSameGroup]
      let tempsRelatedAliments = []
      for (let i = 0; i < numRelatedAliments; i++) {
        const index = Math.floor(
          Math.random() * tempsAlimentsOfSameGroup.length
        )
        tempsRelatedAliments.push(tempsAlimentsOfSameGroup[index])
        tempsAlimentsOfSameGroup.splice(index, 1)
      }
      setRelatedAliments(tempsRelatedAliments)
    }
  }, [alimentsOfSameGroup, numRelatedAliments])

  return (
    <Wrapper>
      <Title>
        Produit de la même catégorie ({props.aliment[`Groupe_d'aliment`]})
      </Title>
      <Aliments>
        {relatedAliments.map(
          aliment =>
            aliment && (
              <AlimentItem key={aliment[`Code_AGB`]} aliment={aliment} />
            )
        )}
      </Aliments>
    </Wrapper>
  )
}
