import React, { useState } from 'react'
import styled from 'styled-components'

import useAlimentsFilters from 'hooks/useAlimentsFilters'

import AlimentItem from 'components/AlimentItem'
import Pagination from './aliments/Pagination'

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  margin: 0 1em 2em;
`
export default function Aliments(props) {
  const filteredAliments = useAlimentsFilters(props.aliments)

  const perPage = 20

  const [page, setPage] = useState(0)

  return (
    <Wrapper>
      {filteredAliments.map(
        (aliment, index) =>
          page * perPage <= index &&
          (page + 1) * perPage > index && (
            <AlimentItem aliment={aliment} key={aliment.ciqual_code + index} />
          )
      )}
      <Pagination
        total={Math.ceil(filteredAliments.length / perPage)}
        page={page}
        setPage={setPage}
      />
    </Wrapper>
  )
}
