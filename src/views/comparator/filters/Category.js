import React, { useContext } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import { colors } from 'utils/styles'
import SearchContext from 'utils/searchContext'
import SubCategory from './category/SubCategory'

const Wrapper = styled.li``
const Title = styled.div`
  margin: 0;
  padding: 0.3rem 1rem 0.5rem;
  font-size: 14px;
  font-weight: ${props => (props.current ? 900 : 500)};
  color: ${props => (props.current ? colors.main : colors.text)};
  cursor: pointer;
  transition: background-color 300ms ease-out;

  &:hover {
    background-color: ${colors.background};
  }
`
const SubCategories = styled.ul`
  display: ${props => (props.open ? 'block' : 'none')};
  margin: 0 0 0.5em;
  padding: 0;
  list-style: none;
`
export default function Category(props) {
  const { categories, setCategories, setSubCategories } = useContext(
    SearchContext
  )

  let history = useHistory()

  return (
    <Wrapper>
      <Title
        current={categories.find(category => category === props.category.title)}
        onClick={() => {
          history.push('/aliments')
          setCategories(
            categories.find(category => category === props.category.title)
              ? []
              : [props.category.title]
          )
          setSubCategories([])
        }}
      >
        {props.category.title.charAt(0).toUpperCase() +
          props.category.title.slice(1)}
      </Title>
      <SubCategories
        open={categories.find(category => category === props.category.title)}
      >
        {props.category.subCategories.map((subCategory, index) => (
          <SubCategory key={index} subCategory={subCategory} />
        ))}
      </SubCategories>
    </Wrapper>
  )
}
