import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { colors } from 'utils/styles'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 0.5em 2em;
`
const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 2em;
  height: 2em;
  margin: 0.5em;
  font-weight: ${props => (props.current ? '900' : 'normal')};
  color: ${props => (props.current ? colors.white : colors.main)};
  border: 1px solid ${colors.main};
  background-color: ${props => (props.current ? colors.main : colors.white)};
  cursor: pointer;
  transition: all 300ms ease-out;

  &:hover {
    background-color: ${colors.main};
    color: ${colors.white};
  }
`
export default function Pagination(props) {
  const [pages, setPages] = useState([])
  useEffect(() => {
    const tempPages = []
    for (let i = 0; i < props.total; i++) {
      tempPages.push(i)
    }
    setPages(tempPages)
  }, [props.total])

  return pages.length > 1 ? (
    <Wrapper>
      {pages.map(number => (
        <Page
          key={number}
          current={number === props.page}
          onClick={() => props.setPage(number)}
        >
          {number + 1}
        </Page>
      ))}
    </Wrapper>
  ) : (
    ''
  )
}
