import React, { useContext } from 'react'
import styled from 'styled-components'

import SearchContext from 'utils/searchContext'

const Wrapper = styled.li`
  font-weight: ${props => (props.current ? 'bold' : 'normal')};
  cursor: pointer;
`
export default function Category(props) {
  const { categories, setCategories } = useContext(SearchContext)

  return (
    <Wrapper
      current={categories.find(category => category === props.category)}
      onClick={() =>
        setCategories(
          categories.find(category => category === props.category)
            ? categories.filter(category => category !== props.category)
            : [...categories, props.category]
        )
      }
    >
      {props.category}
    </Wrapper>
  )
}
