import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { GlobalStyle } from 'utils/styles'

import SearchProvider from 'components/providers/SearchProvider'

import OutdatedBrowser from 'components/OutdatedBrowser'
import Banner from 'components/Banner'
import Home from 'views/Home'
import Comparator from 'views/Comparator'

function App() {
  const [aliments, setAliments] = useState([])

  const [allCategories, setAllCategories] = useState([])
  useEffect(() => {
    let tempCategories = []

    for (let aliment of aliments) {
      if (!tempCategories.find(category => category.title === aliment.groupe)) {
        tempCategories.push({
          title: aliment.groupe,
          subCategories: []
        })
      }

      if (
        !tempCategories
          .find(category => category.title === aliment.groupe)
          .subCategories.find(category => category === aliment.sous_groupe)
      ) {
        tempCategories
          .find(category => category.title === aliment.groupe)
          .subCategories.push(aliment.sous_groupe)
      }
    }
    setAllCategories(tempCategories)
  }, [aliments])

  useEffect(() => {
    fetch('/data/Agribalyse.json')
      .then(res => res.json())
      .then(data => setAliments(data))
  }, [])

  const outdatedBrowser = uaString => {
    uaString = uaString || window.navigator.userAgent
    var match = /\b(MSIE |Trident.*?rv:|Edge\/)(\d+)/.exec(uaString)
    return match && parseInt(match[2]) < 12
  }

  return (
    <Router>
      <GlobalStyle />
      {outdatedBrowser() ? (
        <OutdatedBrowser />
      ) : (
        <>
          <SearchProvider>
            <Banner aliments={aliments} />
            <Switch>
              <Route path='/aliments/:ciqual_code?/:nom_francais'>
                <Comparator aliments={aliments} categories={allCategories} />
              </Route>
              <Route path={['/']}>
                <Home />
              </Route>
            </Switch>
          </SearchProvider>
        </>
      )}
    </Router>
  )
}

export default App
