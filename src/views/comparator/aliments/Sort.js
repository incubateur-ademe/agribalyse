import React, { useContext } from 'react'
import styled from 'styled-components'

import { mq } from 'utils/styles'
import SearchContext from 'utils/searchContext'

const Select = styled.select`
  flex: 1;
  margin: 0 2em 1em;

  ${mq.medium} {
    margin: 0 1em 1em;
  }
`
const Option = styled.option``
export default function Sort() {
  const { sort, setSort } = useContext(SearchContext)

  return (
    <Select value={sort} onChange={e => setSort(e.currentTarget.value)}>
      <Option value={'Nom_du_Produit_en_Français'}>
        Ordre alphabétique (A > Z)
      </Option>
      <Option value={'-Nom_du_Produit_en_Français'}>
        Ordre alphabétique (Z > A)
      </Option>
      <Option value={'Score_unique_EF_(mPt/kg_de_produit)'}>
        Score (Du plus bas au plus haut)
      </Option>
      <Option value={'-Score_unique_EF_(mPt/kg_de_produit)'}>
        Score (Du plus haut au plus bas)
      </Option>
      <Option
        value={
          'DQR_-_Note_de_qualité_de_la_donnée_(1_excellente___5_très_faible)'
        }
      >
        DQR (Du plus bas au plus haut)
      </Option>
      <Option
        value={
          '-DQR_-_Note_de_qualité_de_la_donnée_(1_excellente___5_très_faible)'
        }
      >
        DQR (Du plus haut au plus bas)
      </Option>
    </Select>
  )
}
