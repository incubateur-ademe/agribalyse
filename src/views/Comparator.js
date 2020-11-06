import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import api from 'utils/api'
import Aliments from './comparator/Aliments'
import Aliment from './comparator/Aliment'
import Filters from './comparator/Filters'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
export default function Comparator() {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    api.fetchCategories().then(categories => setCategories(categories.aggs))
  }, [])

  return (
    <Wrapper>
      <Filters categories={categories} />
      <Switch>
        <Route path='/aliments/:code_agb'>
          <Aliment />
        </Route>
        <Route path={['/aliments']}>
          <Aliments categories={categories} />
        </Route>
      </Switch>
    </Wrapper>
  )
}
