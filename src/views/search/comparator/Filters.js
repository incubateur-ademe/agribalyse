import React from 'react'
import styled from 'styled-components'

import { mq } from 'utils/styles'

import Category from './filters/Category'

const Wrapper = styled.div`
  width: 250px;
  margin: 0 0 2em 2em;

  ${mq.medium} {
    display: none;
  }
`
const Title = styled.h2`
  margin-top: 0.2em;
`
const Categories = styled.ul`
  margin: 0 -1em;
  padding: 0;
  list-style: none;
`
export default function Filters(props) {
  return (
    <Wrapper>
      <Title>Catégories</Title>
      <Categories>
        {props.categories.map((category, index) => (
          <Category key={index} category={category} />
        ))}
      </Categories>
    </Wrapper>
  )
}
