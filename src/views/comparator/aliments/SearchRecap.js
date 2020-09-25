import React, { useContext } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import SearchContext from 'utils/searchContext'
import { colors } from 'utils/styles'

import Category from './searchRecap/Category'

const Wrapper = styled.div``
const Search = styled.div`
  margin: 0.3em 1em 1em;
  font-weight: 500;
`
const Word = styled.span`
  font-weight: 700;
  color: ${colors.main};
`
const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 0.5em;
`
export default function SearchRecap(props) {
  const {
    search,
    categories,
    setCategories,
    subCategories,
    setSubCategories
  } = useContext(SearchContext)

  let history = useHistory()

  return (
    <Wrapper>
      {search && (
        <Search>
          Résultats de votre recherche pour <Word>{search}</Word> (
          {props.numAliments} résultats){' '}
          {categories.length || subCategories.length ? 'dans :' : ':'}
        </Search>
      )}
      <Categories>
        {categories.map(category => (
          <Category
            category={category}
            onClick={() => {
              history.push('/aliments')
              setCategories([])
              setSubCategories([])
            }}
          />
        ))}
        {subCategories.map(category => (
          <Category
            category={category}
            onClick={() => {
              history.push('/aliments')
              setSubCategories(
                subCategories.filter(subCategory => subCategory !== category)
              )
            }}
          />
        ))}
      </Categories>
    </Wrapper>
  )
}
