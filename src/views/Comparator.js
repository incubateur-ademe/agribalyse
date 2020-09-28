import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import Aliments from './comparator/Aliments'
import Aliment from './comparator/Aliment'
import Filters from './comparator/Filters'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
export default function Comparator(props) {
  return (
    <Wrapper>
      <Filters aliments={props.aliments} categories={props.categories} />
      <Switch>
        <Route path='/aliments/:ciqual_code'>
          <Aliment aliments={props.aliments} />
        </Route>
        <Route path={['/aliments']}>
          <Aliments aliments={props.aliments} categories={props.categories} />
        </Route>
      </Switch>
    </Wrapper>
  )
}
