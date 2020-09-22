import React, { useState } from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import SearchContext from 'utils/searchContext'

import Breadcrumb from 'components/layout/Breadcrumb'
import Banner from './home/Banner'
import Aliments from './home/Aliments'
import Aliment from './home/Aliment'
import Filters from './home/Filters'
import Sort from './home/Sort'

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
export default function Home(props) {
  const [search, setSearch] = useState('')
  const [categories, setCategories] = useState([])
  const [subCategories, setSubCategories] = useState([])
  const [sort, setSort] = useState('score_asc')

  return (
    <div>
      <SearchContext.Provider
        value={{
          search,
          setSearch,
          categories,
          setCategories,
          subCategories,
          setSubCategories,
          sort,
          setSort
        }}
      >
        <Banner aliments={props.aliments} />
        <Flex>
          <Breadcrumb />
          <Sort />
        </Flex>
        <Flex>
          <Filters aliments={props.aliments} />
          <Switch>
            <Route path='/aliments/:ciqual_code'>
              <Aliment aliments={props.aliments} />
            </Route>
            <Route path={['/aliments', '/']}>
              <Aliments aliments={props.aliments} />
            </Route>
          </Switch>
        </Flex>
      </SearchContext.Provider>
    </div>
  )
}
