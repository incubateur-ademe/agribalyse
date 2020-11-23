import React, { useContext } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import { colors, mq } from 'utils/styles'
import SearchContext from 'utils/searchContext'

const Wrapper = styled.li`
  padding: 0.3rem 1rem 0.3rem 2rem;
  font-size: 14px;
  font-weight: ${props => (props.current ? '700' : '400')};
  color: ${props => (props.current ? colors.main : colors.text)};
  cursor: pointer;
  transition: background-color 300ms ease-out;

  &:hover {
    background-color: ${colors.lightSecondary};
  }

  ${mq.medium} {
    padding: 0.5rem 1rem 0.5rem 2rem;
  }
`
export default function Subcategory(props) {
  const { subCategories, setSubCategories } = useContext(SearchContext)

  const history = useHistory()

  return (
    <Wrapper
      current={subCategories.find(
        subCategory => subCategory === props.subCategory.value
      )}
      onClick={() => {
        history.replace({
          pathname: '/app/aliments',
          search: history.location.search
        })
        setSubCategories(
          subCategories.find(
            subCategory => subCategory === props.subCategory.value
          )
            ? subCategories.filter(
                subCategory => subCategory !== props.subCategory.value
              )
            : [...subCategories, props.subCategory.value]
        )
      }}
    >
      {props.subCategory.value.charAt(0).toUpperCase() +
        props.subCategory.value.slice(1)}
    </Wrapper>
  )
}
