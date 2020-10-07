import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { mq } from 'utils/styles'
import useAlimentsFilters from 'hooks/useAlimentsFilters'

import Button from 'components/Button'
import AlimentItem from 'components/AlimentItem'
import SearchRecap from './aliments/SearchRecap'
import MobileFilters from './aliments/MobileFilters'
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

  ${mq.medium} {
    flex-direction: column-reverse;
  }
`
const SortWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  ${mq.medium} {
    width: 100%;
  }
  ${mq.small} {
    flex-direction: column-reverse;
  }
`
const MobileFiltersButton = styled.div`
  display: none;
  flex: 1;
  margin: 0 1em 1em;

  ${mq.medium} {
    display: block;
  }
`
export default function Aliments(props) {
  const filteredAliments = useAlimentsFilters(props.aliments)

  const perPage = 21

  const [page, setPage] = useState(0)

  useEffect(() => {
    setPage(0)
  }, [filteredAliments])

  const [mobileFiltersVisible, setMobileFiltersVisible] = useState(false)
  return (
    <Wrapper>
      <Flex>
        <SearchRecap numAliments={filteredAliments.length} />
        <MobileFilters
          visible={mobileFiltersVisible}
          categories={props.categories}
        />
        <SortWrapper>
          <MobileFiltersButton>
            <Button
              expand
              hollow={!mobileFiltersVisible}
              onClick={() => setMobileFiltersVisible(!mobileFiltersVisible)}
            >
              Catégories
            </Button>
          </MobileFiltersButton>
          <Sort />
        </SortWrapper>
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
