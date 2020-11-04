import React, { useContext } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import { colors, mq } from 'utils/styles'
import SearchContext from 'utils/searchContext'

const Wrapper = styled.div`
  display: flex;
  margin: 0.5rem 0 1rem;
  font-size: 14px;

  ${mq.small} {
    display: none;
  }
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
  const { setSearch, setCategories, setSubCategories } = useContext(
    SearchContext
  )

  let history = useHistory()
  console.log(props.aliment)
  return (
    <Wrapper>
      <Item
        onClick={() => {
          history.push('/aliments')
          setSearch('')
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
          setSearch('')
          setCategories([props.aliment[`Groupe_d'aliment`]])
          setSubCategories([])
        }}
      >
        {props.aliment[`Groupe_d'aliment`].charAt(0).toUpperCase() +
          props.aliment[`Groupe_d'aliment`].slice(1)}
      </Item>
      <Separator>></Separator>
      <Item
        onClick={() => {
          history.push('/aliments')
          setSearch('')
          setCategories([props.aliment[`Groupe_d'aliment`]])
          setSubCategories([props.aliment[`Sous-groupe_d'aliment`]])
        }}
      >
        {props.aliment[`Sous-groupe_d'aliment`].charAt(0).toUpperCase() +
          props.aliment[`Sous-groupe_d'aliment`].slice(1)}
      </Item>
    </Wrapper>
  )
}
