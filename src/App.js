import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { GlobalStyle } from 'utils/styles'
import SearchContext from 'utils/searchContext'

import Home from 'views/Home'
import Comparator from 'views/Comparator'
import Banner from 'components/Banner'

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

  const [search, setSearch] = useState('')
  const [categories, setCategories] = useState([])
  const [subCategories, setSubCategories] = useState([])
  const [sort, setSort] = useState('alph_asc')

  useEffect(() => {
    fetch('/data/Agribalyse.json')
      .then(res => res.json())
      .then(data => setAliments(data))
  }, [])

  return (
    <div>
      <Router>
        <GlobalStyle />
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
          <Banner aliments={aliments} />
          <Switch>
            <Route path='/aliments/:ciqual_code?'>
              <Comparator aliments={aliments} categories={allCategories} />
            </Route>
            <Route path={['/']}>
              <Home categories={allCategories} />
            </Route>
          </Switch>
        </SearchContext.Provider>
      </Router>
    </div>
  )
}

export default App
