import React, { useContext } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import { colors } from 'utils/styles'
import SearchContext from 'utils/searchContext'

const Wrapper = styled.li`
  padding: 0.3rem 1rem 0.3rem 2rem;
  font-size: 14px;
  font-weight: 300;
  font-weight: ${props => (props.current ? '700' : '300')};
  color: ${props => (props.current ? colors.main : colors.text)};
  cursor: pointer;
  transition: background-color 300ms ease-out;

  &:hover {
    background-color: ${colors.background};
  }
`
export default function Subcategory(props) {
  const { subCategories, setSubCategories } = useContext(SearchContext)

  let history = useHistory()

  return (
    <Wrapper
      current={subCategories.find(
        subCategory => subCategory === props.subCategory
      )}
      onClick={() => {
        history.push('/aliments')
        setSubCategories(
          subCategories.find(subCategory => subCategory === props.subCategory)
            ? subCategories.filter(
                subCategory => subCategory !== props.subCategory
              )
            : [...subCategories, props.subCategory]
        )
      }}
    >
      {props.subCategory}
    </Wrapper>
  )
}
