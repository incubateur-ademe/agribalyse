import React from 'react'
import styled from 'styled-components'
import { Switch, Route } from 'react-router-dom'

import Aliments from './comparator/Aliments'
import Aliment from './comparator/Aliment'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
export default function Comparator() {
  return (
    <Wrapper>
      <Switch>
        <Route path='/app/aliments/:code_agb'>
          <Aliment />
        </Route>
        <Route path={['/app/aliments']}>
          <Aliments />
        </Route>
      </Switch>
    </Wrapper>
  )
}
