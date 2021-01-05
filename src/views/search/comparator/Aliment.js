import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'

import { mq } from 'utils/styles'
import api from 'utils/api'

import Loader from 'components/misc/Loader'
import BreadCrumb from './aliment/BreadCrumb'
import Informations from './aliment/Informations'
import RelatedAliments from './aliment/RelatedAliments'

const Wrapper = styled.div`
  flex: 1;
  margin: 0 2em 2em;

  ${mq.small} {
    margin: 0 1em 2em;
  }
  ${mq.large} {
    max-width: 1200px;
    margin: 0 auto 2em;
  }
`
export default function Aliment() {
  const { code_agb } = useParams()
  const [aliment, setAliment] = useState(null)
  const [indicateurs, setIndicateurs] = useState(null)
  const [ingredients, setIngredients] = useState(null)
  const [error, setError] = useState(false)
  useEffect(() => {
    api.fetchAliments({ code_agb }).then(aliment => {
      if (aliment.results && aliment.results.length) {
        setAliment(aliment.results[0])
      } else {
        setError(true)
      }
    })
    api
      .fetchIndicateurs(code_agb)
      .then(indicateurs => setIndicateurs(indicateurs.results[0]))
    api
      .fetchIngredients(code_agb)
      .then(ingredients => setIngredients(ingredients.results))
  }, [code_agb])

  return (
    <Wrapper>
      {aliment && indicateurs && ingredients ? (
        <>
          <BreadCrumb aliment={aliment} />
          <Informations
            aliment={aliment}
            indicateurs={indicateurs}
            ingredients={ingredients}
          />
          <RelatedAliments aliment={aliment} />
        </>
      ) : (
        <Loader />
      )}
    </Wrapper>
  )
}
