import React, { useContext } from 'react'
import styled from 'styled-components'

import SearchContext from 'utils/searchContext'

const Input = styled.input``
export default function Search() {
  const { search, setSearch } = useContext(SearchContext)

  return (
    <div>
      <Input
        type='text'
        value={search}
        onChange={e => setSearch(e.currentTarget.value)}
      />
    </div>
  )
}
