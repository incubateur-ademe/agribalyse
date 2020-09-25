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
  position: relative;
  display: inline-block;
  padding: 0.4em 1.2em 0.4em 0.8em;
  color: ${colors.white};
  background-color: ${colors.main};
  border-radius: 0.5em;
  cursor: pointer;
  transition: all 300ms ease-out;

  &:hover {
    background-color: ${colors.hoverMain};
  }

  &:before {
    content: 'x';
    position: absolute;
    top: 0.1em;
    right: 0.5em;
    font-size: 12px;
    color: ${colors.white};
  }
`
const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 0.5em;
`
export default function SearchRecap(props) {
  const {
    search,
    setSearch,
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
          Résultats de votre recherche pour{' '}
          <Word onClick={() => setSearch('')}>{search}</Word> (
          {props.numAliments} résultats){' '}
          {categories.length || subCategories.length ? 'dans :' : ':'}
        </Search>
      )}
      <Categories>
        {categories.map(category => (
          <Category
            key={category}
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
            key={category}
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
