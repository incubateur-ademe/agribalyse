import React from 'react'
import styled from 'styled-components'

import { colors } from 'utils/styles'
import Category from '../filters/Category'

const Wrapper = styled.ul`
  display: ${props => (props.visible ? 'block' : 'none')};
  width: 100%;
  margin: 0 0 1em;
  padding: 0;
  list-style: none;
  background-color: ${colors.white};
`
export default function MobileFilters(props) {
  return (
    <Wrapper visible={props.visible}>
      {props.categories.map((category, index) => (
        <Category key={index} category={category} />
      ))}
    </Wrapper>
  )
}
