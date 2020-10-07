import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import { colors, mq } from 'utils/styles'
import SearchContext from 'utils/searchContext'

import Arrow from './search/Arrow'

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 2vw;

  ${mq.mediumLandscape} {
    margin-bottom: ${props => (props.small ? 0 : '2vw')};
  }
  ${mq.mediumPortrait} {
    width: 86vw;
    margin-bottom: ${props => (props.small ? 0 : '3vw')};
  }

  ${mq.small} {
    width: auto;
    opacity: ${props => (props.small ? 0 : 1)};
    pointer-events: ${props => (props.small ? 'none' : 'inherit')};
    transition: opacity 300ms;
  }
`
const InputWrapper = styled.div`
  position: relative;
  margin-right: 2vw;

  ${mq.mediumPortrait} {
    flex: 1;
    margin-right: 3vw;
  }
`
const Input = styled.input`
  width: 48vw;
  color: ${colors.black};
  background-color: ${colors.white};
  border: 2px solid ${colors.white};
  border-radius: 1em;
  padding: 0.4em 2.5em 0.4em 1em;
  font-size: 1.5vw;
  outline: none;
  transition: all 300ms ease-out;

  &:focus {
    border: 2px solid ${colors.hoverMain};
  }

  ${mq.mediumPortrait} {
    width: 100%;
    font-size: ${props => (props.small ? '2vw' : '3vw')};
  }

  ${mq.small} {
    font-size: 4vw;
  }
  ${mq.large} {
    width: 40vw;
    font-size: 1vw;
  }
`
const EnterIndicator = styled.div`
  position: absolute;
  top: calc(100% + 0.3rem);
  right: 2rem;
  color: ${colors.white};
  font-size: 12px;
  opacity: ${props => (props.visible ? 1 : 0)};
  pointer-events: ${props => (props.visible ? 'inherit' : 'none')};
  cursor: pointer;
  transition: opacity 300ms ease-out;

  ${mq.medium} {
    display: none;
  }
`
const Button = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1em;
  font-size: 1vw;
  font-weight: 500;
  text-decoration: none;
  color: ${colors.white};
  background-color: transparent;
  border: 2px solid ${colors.white};
  border-radius: 1em;
  cursor: pointer;
  transition: all 300ms ease-out;

  &:hover {
    color: ${colors.main};
    background-color: ${colors.white};
  }

  ${mq.mediumPortrait} {
    font-size: ${props => (props.small ? '2vw' : '1.5vw')};
  }

  ${mq.small} {
    position: absolute;
    bottom: 5vw;
    left: 3vw;
    padding: 0.5em 1em;
    font-size: 3.5vw;
  }
  ${mq.large} {
    font-size: 0.7vw;
  }
`
export default function Search(props) {
  const { search, setSearch } = useContext(SearchContext)

  const [value, setValue] = useState(search)

  useEffect(() => {
    setValue(search)
  }, [search])

  const [focus, setFocus] = useState(false)

  let history = useHistory()

  return (
    <Wrapper small={props.small}>
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
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          small={props.small}
        />
        <Arrow
          visible={value.length > 2}
          onClick={() => {
            history.push('/aliments')
            setSearch(value)
          }}
        />
        <EnterIndicator
          visible={value.length > 2 && focus}
          onClick={() => {
            history.push('/aliments')
            setSearch(value)
          }}
        >
          Appuyez sur Entrée
        </EnterIndicator>
      </InputWrapper>
      <Button
        href='https://ecolab.gitbook.io/documentation-agribalyse/acces-donnees'
        target='_blank'
        rel='noopener noreferrer'
        small={props.small}
      >
        Documentation et accès aux données
      </Button>
    </Wrapper>
  )
}
