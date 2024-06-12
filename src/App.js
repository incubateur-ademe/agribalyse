import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { QueryParamProvider } from 'use-query-params'

import { GlobalStyle } from 'utils/styles'

import OutdatedBrowser from 'components/OutdatedBrowser'
import Footer from 'components/Footer'
import Home from 'views/Home'
import Search from 'views/Search'
import Accessibility from 'views/Accessibility'

function App() {
  const outdatedBrowser = (uaString) => {
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
            <Switch>
              <Route path="/app">
                <Search />
              </Route>
              <Route path="/accessibilite">
                <Accessibility />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
            <Footer />
          </>
        )}
      </QueryParamProvider>
    </Router>
  )
}

export default App
