import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
`
export default function Loader() {
  return <Wrapper>Loading...</Wrapper>
}
