import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div``
const Page = styled.div`
  font-weight: ${props => (props.current ? 'bold' : 'normal')};
  cursor: pointer;
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
