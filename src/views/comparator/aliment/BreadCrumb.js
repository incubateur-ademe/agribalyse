import React, { useContext } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import { colors } from 'utils/styles'
import SearchContext from 'utils/searchContext'

const Wrapper = styled.div`
  display: flex;
  margin: 0.5rem 0 1rem;
  font-size: 14px;
`
const Item = styled.div`
  font-weight: 500;
  color: ${colors.main};
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`
const Separator = styled.div`
  margin: 0 0.5em;
`
export default function BreadCrumb(props) {
  const { setCategories, setSubCategories } = useContext(SearchContext)

  let history = useHistory()

  return (
    <Wrapper>
      <Item
        onClick={() => {
          history.push('/aliments')
          setCategories([])
          setSubCategories([])
        }}
      >
        Tous les aliments
      </Item>
      <Separator>></Separator>
      <Item
        onClick={() => {
          history.push('/aliments')
          setCategories([props.aliment.groupe])
          setSubCategories([])
        }}
      >
        {props.aliment.groupe}
      </Item>
      <Separator>></Separator>
      <Item
        onClick={() => {
          history.push('/aliments')
          setCategories([props.aliment.groupe])
          setSubCategories([props.aliment.sous_groupe])
        }}
      >
        {props.aliment.sous_groupe}
      </Item>
    </Wrapper>
  )
}
