import React, { useContext } from 'react'
import styled from 'styled-components'

import SearchContext from 'utils/searchContext'

const Select = styled.select`
  margin: 0 2em 1em;
`
const Option = styled.option``
export default function Sort() {
  const { sort, setSort } = useContext(SearchContext)

  return (
    <Select value={sort} onChange={e => setSort(e.currentTarget.value)}>
      <Option value={'alph_asc'}>Ordre alphabétique (A > Z)</Option>
      <Option value={'alph_desc'}>Ordre alphabétique (Z > A)</Option>
      <Option value={'score_asc'}>Score (Du plus bas au plus haut)</Option>
      <Option value={'score_desc'}>Score (Du plus haut au plus bas)</Option>
      <Option value={'dqr_asc'}>DQR (Du plus bas au plus haut)</Option>
      <Option value={'dqr_desc'}>DQR (Du plus haut au plus bas)</Option>
    </Select>
  )
}
