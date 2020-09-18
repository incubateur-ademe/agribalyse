import React, { useContext } from 'react'
import styled from 'styled-components'

import SearchContext from 'utils/searchContext'

const Select = styled.select``
const Option = styled.option``
export default function Sort() {
  const { sort, setSort } = useContext(SearchContext)

  return (
    <Select value={sort} onChange={e => setSort(e.currentTarget.value)}>
      <Option value={'score_asc'}>Score (Du plus bas au plus haut)</Option>
      <Option value={'score_desc'}>Score (Du plus haut au plus bas)</Option>
      <Option value={'co2_asc'}>Impact CO2 (Du plus bas au plus haut)</Option>
      <Option value={'co2_desc'}>Impact CO2 (Du plus haut au plus bas)</Option>
    </Select>
  )
}
