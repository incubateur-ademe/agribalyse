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
      <Option value={'Pertinence'}>
        Pertinence
      </Option>
      <Option value={'Nom_du_Produit_en_Français'}>
        Ordre alphabétique (↑)
      </Option>
      <Option value={'-Nom_du_Produit_en_Français'}>
        Ordre alphabétique (↓)
      </Option>
      <Option value={'Changement_climatique'}>
        Changement climatique (↑)
      </Option>
      <Option value={'-Changement_climatique'}>
        Changement climatique (↓)
      </Option>
      <Option
        value={
          'DQR'
        }
      >
        DQR (↑)
      </Option>
      <Option
        value={
          '-DQR'
        }
      >
        DQR (↓)
      </Option>
    </Select>
  )
}
