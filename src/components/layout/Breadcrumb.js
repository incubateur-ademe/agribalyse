import React, { useContext } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import SearchContext from 'utils/searchContext'

import Category from './breadCrumb/Category'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 1.5em;
`

export default function Breadcrumb() {
  const {
    categories,
    setCategories,
    subCategories,
    setSubCategories
  } = useContext(SearchContext)

  let history = useHistory()

  return (
    <Wrapper>
      {categories.map(category => (
        <Category
          category={category}
          onClick={() => {
            history.push('/')
            setCategories([])
            setSubCategories([])
          }}
        />
      ))}
      {subCategories.map(category => (
        <Category
          category={category}
          onClick={() => {
            history.push('/')
            setSubCategories(
              subCategories.filter(subCategory => subCategory !== category)
            )
          }}
        />
      ))}
    </Wrapper>
  )
}
