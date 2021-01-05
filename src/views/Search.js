import React from 'react'
import { Route } from 'react-router-dom'

import SearchProvider from 'components/providers/SearchProvider'

import Banner from 'components/Banner'
import Comparator from './search/Comparator'

export default function Search() {
  return (
    <SearchProvider>
      <Banner />
      <Route path='/app/aliments/:code_agb?'>
        <Comparator />
      </Route>
    </SearchProvider>
  )
}
