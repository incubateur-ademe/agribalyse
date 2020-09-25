import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import useAlimentsFilters from 'hooks/useAlimentsFilters'

import AlimentItem from 'components/AlimentItem'
import SearchRecap from './aliments/SearchRecap'
import Sort from './aliments/Sort'
import Pagination from './aliments/Pagination'

const Wrapper = styled.div`
  flex: 1;
  margin: 0 1em 2em;
`
const AlimentsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1em;
`
export default function Aliments(props) {
  const filteredAliments = useAlimentsFilters(props.aliments)

  const perPage = 21

  const [page, setPage] = useState(0)

  useEffect(() => {
    setPage(0)
  }, [filteredAliments])

  return (
    <Wrapper>
      <Flex>
        <SearchRecap numAliments={filteredAliments.length} />
        <Sort />
      </Flex>
      <AlimentsWrapper>
        {filteredAliments.map(
          (aliment, index) =>
            page * perPage <= index &&
            (page + 1) * perPage > index && (
              <AlimentItem
                aliment={aliment}
                key={aliment.ciqual_code + index}
              />
            )
        )}
      </AlimentsWrapper>
      <Pagination
        total={Math.floor(filteredAliments.length / perPage)}
        page={page}
        setPage={setPage}
      />
    </Wrapper>
  )
}
