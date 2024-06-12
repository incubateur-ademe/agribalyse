import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { colors } from 'utils/styles'

const Wrapper = styled.div`
  padding: 2em;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`
export default function Footer() {
  return (
    <Wrapper>
      <a
        href="https://data.ademe.fr/datasets"
        target="_blank"
        rel="noopener noreferrer">
        Application de recherche développée grâce à l'api Koumoul
      </a>
      <Link to="/accessibilite">Accessibilité : non conforme</Link>
    </Wrapper>
  )
}
