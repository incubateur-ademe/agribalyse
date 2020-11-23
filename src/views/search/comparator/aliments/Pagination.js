import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'

import { colors, breakpoints } from 'utils/styles'
import useWindowSize from 'hooks/useWindowSize'
import SearchContext from 'utils/searchContext'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  pointer-events: ${props => (props.loading ? 'none' : 'inherit')};
  opacity: ${props => (props.loading ? 0.5 : 1)};
  transition: opacity 300ms ease-in-out;
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
  opacity: ${props => (props.disabled ? '0.3' : '1')};
  pointer-events: ${props => (props.disabled ? 'none' : 'inherit')};

  &:hover {
    background-color: ${colors.main};
    color: ${colors.white};
  }
`
export default function Pagination(props) {
  const { page, setPage, size, loading } = useContext(SearchContext)

  const [numPageEachSide, setNumPageEachSide] = useState(0)
  const windowSize = useWindowSize()
  useEffect(() => {
    setNumPageEachSide(windowSize.width < breakpoints.small ? 1 : 4)
  }, [windowSize])

  const [numPagesTotal, setNumPagesTotal] = useState(0)
  useEffect(() => {
    setNumPagesTotal(Math.ceil(props.total / size))
  }, [props.total, size])

  //Rigolo à faire. Moins sympa à maintenir
  const [visiblePages, setVisiblePages] = useState([])
  useEffect(() => {
    let numPageBefore = page > numPageEachSide ? numPageEachSide : page - 1
    let numPageAfter =
      numPagesTotal - page > numPageEachSide * 2 - numPageBefore
        ? numPageEachSide * 2 - numPageBefore
        : numPagesTotal - page

    if (numPageAfter < numPageEachSide) {
      numPageBefore =
        page > numPageEachSide * 2 - numPageAfter
          ? numPageEachSide * 2 - numPageAfter
          : page - 1
    }
    let tempVisiblepage = []

    for (let i = 1; i <= numPageBefore; i++) {
      tempVisiblepage.push(page - i)
    }
    for (let i = 0; i < numPageAfter; i++) {
      tempVisiblepage.push(page + i + 1)
    }
    tempVisiblepage.push(page)
    tempVisiblepage.sort((a, b) => (a < b ? -1 : 1))
    setVisiblePages(tempVisiblepage)
  }, [numPagesTotal, page, numPageEachSide])

  return visiblePages.length > 1 ? (
    <Wrapper loading={loading}>
      <Page disabled={page === 1} onClick={() => setPage(page - 1)}>
        {'<'}
      </Page>
      {visiblePages.map(number => (
        <Page
          key={number}
          current={number === page}
          onClick={() => setPage(number)}
        >
          {number}
        </Page>
      ))}
      <Page disabled={page === numPagesTotal} onClick={() => setPage(page + 1)}>
        {'>'}
      </Page>
    </Wrapper>
  ) : (
    ''
  )
}
