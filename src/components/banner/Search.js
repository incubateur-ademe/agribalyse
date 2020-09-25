import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import { colors } from 'utils/styles'
import SearchContext from 'utils/searchContext'

import Arrow from './search/Arrow'

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 2vw;
`
const InputWrapper = styled.div`
  position: relative;
  margin-right: 2vw;
`
const Input = styled.input`
  width: 48vw;
  color: ${colors.black};
  background-color: ${colors.white};
  border: none;
  border-bottom: 2px solid ${colors.main};
  padding: 0.3em 2.5em 0.3em 1em;
  font-size: 1.5vw;
`
const Button = styled.a`
  display: block;
  padding: 0.7em 1em;
  font-size: 1vw;
  font-weight: 500;
  text-decoration: none;
  color: ${colors.main};
  background-color: transparent;
  border: 2px solid ${colors.main};
  cursor: pointer;
  transition: all 300ms ease-out;

  &:hover {
    color: ${colors.white};
    background-color: ${colors.main};
  }
`
export default function Search() {
  const { search, setSearch } = useContext(SearchContext)

  const [value, setValue] = useState(search)

  let history = useHistory()

  return (
    <Wrapper>
      <InputWrapper>
        <Input
          type='text'
          value={value}
          placeholder={'Rechercher'}
          onChange={e => {
            setValue(e.currentTarget.value)
          }}
          onKeyUp={e => {
            if (value.length > 2 && (e.key === 'Enter' || e.keyCode === 13)) {
              history.push('/aliments')
              setSearch(value)
            }
          }}
        />
        <Arrow
          display={value.length > 2}
          onClick={() => {
            history.push('/aliments')
            setSearch(value)
          }}
        />
      </InputWrapper>
      <Button
        href='https://ecolab.gitbook.io/documentation-agribalyse/acces-donnees'
        target='_blank'
        rel='noopener noreferrer'
      >
        Télécharger les données
      </Button>
    </Wrapper>
  )
}
