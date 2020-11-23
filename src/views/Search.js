import React from 'react'
import { Switch, Route } from 'react-router-dom'

import SearchProvider from 'components/providers/SearchProvider'

import Banner from 'components/Banner'
import Comparator from './search/Comparator'

export default function Search() {
  return (
    <SearchProvider>
      <Banner />
      <Switch>
        <Route path='/app/aliments/:code_agb?'>
          <Comparator />
        </Route>
      </Switch>
    </SearchProvider>
  )
}
