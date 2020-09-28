import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { colors, breakpoints } from 'utils/styles'
import useWindowSize from 'hooks/useWindowSize'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
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
  const [numPageEachSide, setNumPageEachSide] = useState(0)
  const windowSize = useWindowSize()
  useEffect(() => {
    setNumPageEachSide(windowSize.width < breakpoints.small ? 1 : 4)
  }, [windowSize])

  const [visiblePages, setVisiblePages] = useState([])

  useEffect(() => {
    let numPageBefore =
      props.page > numPageEachSide ? numPageEachSide : props.page
    let numPageAfter =
      props.total - props.page > numPageEachSide * 2 - numPageBefore
        ? numPageEachSide * 2 - numPageBefore
        : props.total - props.page

    if (numPageAfter < numPageEachSide) {
      numPageBefore =
        props.page > numPageEachSide * 2 - numPageAfter
          ? numPageEachSide * 2 - numPageAfter
          : props.page
    }

    let tempVisiblepage = []

    for (let i = 0; i < numPageBefore; i++) {
      tempVisiblepage.push(props.page - i - 1)
    }
    for (let i = 0; i < numPageAfter; i++) {
      tempVisiblepage.push(props.page + i + 1)
    }
    tempVisiblepage.push(props.page)
    tempVisiblepage.sort((a, b) => (a < b ? -1 : 1))
    setVisiblePages(tempVisiblepage)
  }, [props.total, props.page, numPageEachSide])

  return visiblePages.length > 1 ? (
    <Wrapper>
      <Page
        disabled={props.page === 0}
        onClick={() => props.setPage(props.page - 1)}
      >
        {'<'}
      </Page>
      {visiblePages.map(number => (
        <Page
          key={number}
          current={number === props.page}
          onClick={() => props.setPage(number)}
        >
          {number}
        </Page>
      ))}
      <Page
        disabled={props.page === props.total}
        onClick={() => props.setPage(props.page + 1)}
      >
        {'>'}
      </Page>
    </Wrapper>
  ) : (
    ''
  )
}
