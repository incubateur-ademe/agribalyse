import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'

import { GlobalStyle } from 'utils/styles'
import SearchProvider from 'components/providers/SearchProvider'

import OutdatedBrowser from 'components/OutdatedBrowser'
import Banner from 'components/Banner'
import Home from 'views/Home'
import Comparator from 'views/Comparator'

function App() {
  const outdatedBrowser = uaString => {
    uaString = uaString || window.navigator.userAgent
    var match = /\b(MSIE |Trident.*?rv:|Edge\/)(\d+)/.exec(uaString)
    return match && parseInt(match[2]) < 12
  }

  return (
    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        <GlobalStyle />
        {outdatedBrowser() ? (
          <OutdatedBrowser />
        ) : (
          <>
            <SearchProvider>
              <Banner />
              <Switch>
                <Route path='/aliments/:code_agb?'>
                  <Comparator />
                </Route>
                <Route path={['/']}>
                  <Home />
                </Route>
              </Switch>
            </SearchProvider>
          </>
        )}
      </QueryParamProvider>
    </Router>
  )
}

export default App
