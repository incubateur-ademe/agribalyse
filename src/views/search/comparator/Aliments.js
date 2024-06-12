import React, { useContext, useMemo } from 'react'
import styled from 'styled-components'
import { mq } from 'utils/styles'
import SearchContext from 'utils/searchContext'
import Fuse from 'fuse.js';
import AlimentItem from 'components/AlimentItem'
import SearchRecap from './aliments/SearchRecap'
import Pagination from './aliments/Pagination'
import Loader from 'components/misc/Loader'
import Sort from './aliments/Sort'

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
export default function Aliments(props) {
  const {
    search,
    loading,
    aliments,
    sort
  } = useContext(SearchContext)

  const fuse = new Fuse(aliments.results, {
    threshold: 0,
    ignoreLocation: true,
    ignoreFieldNorm: false,
    useExtendedSearch: true,
    keys: [
      { name: 'Nom_du_Produit_en_Français', weight: 1 },
      { name: `Sous-groupe_d'aliment`, weight: 0.3 },
      { name: 'Groupe_d_aliment', weight: 0.2 }
    ],
  })

  const results = useMemo(() => fuse.search(search).map(result => result.item), [fuse, search])

  const sortedResults = useMemo(() => [...results].sort((a, b) => {
    if (sort === 'Pertinence') {
      return 0
    }

    const isNegative = sort[0] === '-'
    const sortAttribute = isNegative ? sort.slice(1) : sort

    if (a[sortAttribute] < b[sortAttribute]) {
      return isNegative ? 1 : -1
    }else{
      return isNegative ? -1 : 1
    }
  }), [results, sort])
  
  return results.length ? (
    <Wrapper>
      <Flex>
        <SearchRecap numAliments={results.length} />
        <Sort />
      </Flex>

      <AlimentsWrapper>
        {sortedResults.map(aliment => (
          <AlimentItem
            aliment={aliment}
            loading={loading}
            key={aliment['Code_AGB']}
          />
        ))}
      </AlimentsWrapper>
      <Pagination total={Math.floor(results.total)} />
    </Wrapper>
  ) : (
    <Loader />
  )
}
