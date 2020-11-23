import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'

import { mq } from 'utils/styles'
import api from 'utils/api'
import SearchContext from 'utils/searchContext'

import Button from 'components/Button'
import AlimentItem from 'components/AlimentItem'
import SearchRecap from './aliments/SearchRecap'
import MobileFilters from './aliments/MobileFilters'
import Sort from './aliments/Sort'
import Pagination from './aliments/Pagination'
import Loader from 'components/misc/Loader'

const Wrapper = styled.div`
  flex: 1;
  margin: 0 1em 2em;

  ${mq.small} {
    margin: 0 0.4em 2em;
  }
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
  const {
    search,
    categories,
    subCategories,
    sort,
    page,
    size,
    loading,
    setLoading
  } = useContext(SearchContext)
  const [aliments, setAliments] = useState()
  useEffect(() => {
    setLoading(true)
    api
      .fetchAliments({
        search,
        categories,
        subCategories,
        sort,
        page,
        size
      })
      .then(aliments => {
        setAliments(aliments)
        setLoading(false)
      })
  }, [search, categories, subCategories, sort, page, size, setLoading])

  const [mobileFiltersVisible, setMobileFiltersVisible] = useState(false)

  return aliments ? (
    <Wrapper>
      <Flex>
        <SearchRecap numAliments={aliments.total} />
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
        {aliments.results.map(aliment => (
          <AlimentItem
            aliment={aliment}
            loading={loading}
            key={aliment['Code_AGB']}
          />
        ))}
      </AlimentsWrapper>
      <Pagination total={Math.floor(aliments.total)} />
    </Wrapper>
  ) : (
    <Loader />
  )
}
