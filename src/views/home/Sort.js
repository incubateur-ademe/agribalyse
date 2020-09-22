import React, { useContext } from 'react'
import styled from 'styled-components'
import { useRouteMatch } from 'react-router-dom'

import SearchContext from 'utils/searchContext'

const Select = styled.select`
  margin: 0 2em 2em;
  opacity: ${props => (props.display ? '1' : '0')};
  transition: opacity 300ms ease-out;
`
const Option = styled.option``
export default function Sort() {
  const { sort, setSort } = useContext(SearchContext)

  let match = useRouteMatch('/aliments/:ciqual_code')

  return (
    <Select
      value={sort}
      onChange={e => setSort(e.currentTarget.value)}
      display={!(match && match.isExact)}
    >
      <Option value={'score_asc'}>Score (Du plus bas au plus haut)</Option>
      <Option value={'score_desc'}>Score (Du plus haut au plus bas)</Option>
      <Option value={'co2_asc'}>Impact CO2 (Du plus bas au plus haut)</Option>
      <Option value={'co2_desc'}>Impact CO2 (Du plus haut au plus bas)</Option>
    </Select>
  )
}
