import React, { useContext } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import { colors, mq } from 'utils/styles'
import SearchContext from 'utils/searchContext'
import SubCategory from './category/SubCategory'

const Wrapper = styled.li`
  pointer-events: ${props => (props.loading ? 'none' : 'inherit')};
  opacity: ${props => (props.loading ? 0.5 : 1)};
  transition: opacity 300ms ease-in-out;
`
const Title = styled.div`
  margin: 0;
  padding: 0.3rem 1rem 0.5rem;
  font-size: 14px;
  font-weight: ${props => (props.current ? 900 : 500)};
  color: ${props => (props.current ? colors.main : colors.text)};
  cursor: pointer;
  transition: background-color 300ms ease-out;

  &:hover {
    background-color: ${colors.lightSecondary};
  }

  ${mq.medium} {
    padding: 0.5rem 1rem 0.8rem;
  }
`
const SubCategories = styled.ul`
  display: ${props => (props.open ? 'block' : 'none')};
  margin: 0 0 0.5em;
  padding: 0;
  list-style: none;
`
export default function Category(props) {
  const { categories, setCategories, setSubCategories, loading } = useContext(
    SearchContext
  )

  const history = useHistory()

  return (
    <Wrapper loading={loading}>
      <Title
        current={categories.find(category => category === props.category.value)}
        onClick={() => {
          history.replace({
            pathname: '/app/aliments',
            search: history.location.search
          })
          setCategories(
            categories.find(category => category === props.category.value)
              ? []
              : [props.category.value]
          )
          setSubCategories([])
        }}
      >
        {props.category.value.charAt(0).toUpperCase() +
          props.category.value.slice(1)}
      </Title>
      <SubCategories
        open={categories.find(category => category === props.category.value)}
      >
        {props.category.aggs.map((subCategory, index) => (
          <SubCategory key={index} subCategory={subCategory} />
        ))}
      </SubCategories>
    </Wrapper>
  )
}
