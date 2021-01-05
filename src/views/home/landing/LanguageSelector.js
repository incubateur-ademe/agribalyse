import React, { useContext } from 'react'
import styled from 'styled-components'

import I18nContext from 'utils/i18nContext'

const Wrapper = styled.div`
  position: absolute;
  top: 2vw;
  right: 2vw;
  display: flex;
  margin-bottom: 2em;
`
const Flag = styled.svg`
  cursor: pointer;
  width: auto;
  height: 30px;
  margin-right: 10px;
  opacity: ${props => (props.active ? 1 : 0.5)};
  transition: opacity 300ms ease-out;

  &:hover {
    opacity: 1;
  }
`
export default function LanguageSelector() {
  const { lang, setLang } = useContext(I18nContext)

  return (
    <Wrapper>
      <Flag
        onClick={() => setLang('fr')}
        active={lang === 'fr'}
        x='0px'
        y='0px'
        viewBox='144.5 696.5 300 200'
      >
        <rect x='144.5' y='696.5' fill='#ED2939' width='300' height='200' />
        <rect x='144.5' y='696.5' fill='#FFFFFF' width='200' height='200' />
        <rect x='144.5' y='696.5' fill='#002395' width='100' height='200' />
      </Flag>
      <Flag
        onClick={() => setLang('en')}
        active={lang === 'en'}
        width='900'
        height='600'
      >
        <clipPath id='s'>
          <path d='M0,0 v30 h45 v-30 z' />
        </clipPath>
        <clipPath id='t'>
          <path d='M22.5,15 h22.5 v15 z v15 h-22.5 z h-22.5 v-15 z v-15 h22.5 z' />
        </clipPath>
        <g clip-path='url(#s)'>
          <path d='M0,0 v30 h45 v-30 z' fill='#012169' />
          <path d='M0,0 L45,30 M45,0 L0,30' stroke='#fff' stroke-width='6' />
          <path
            d='M0,0 L45,30 M45,0 L0,30'
            clip-path='url(#t)'
            stroke='#C8102E'
            stroke-width='4'
          />
          <path d='M22.5,0 v30 M0,15 h45' stroke='#fff' stroke-width='10' />
          <path d='M22.5,0 v30 M0,15 h45' stroke='#C8102E' stroke-width='6' />
        </g>
      </Flag>
    </Wrapper>
  )
}
