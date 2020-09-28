import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { mq } from 'utils/styles'
import Suggestion from './suggestions/Suggestion'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 49vw;
  margin: 0 -0.5vw;

  ${mq.medium} {
    width: 70vw;
    display: ${props => (props.small ? 'none' : 'flex')};
  }
  ${mq.mediumPortrait} {
    width: auto;
  }
  ${mq.small} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  ${mq.large} {
    width: 55vw;
  }
`
export default function Suggestions(props) {
  const [suggestions, setSuggestions] = useState([])
  const [suggestionsData, setSuggestionsData] = useState([])

  useEffect(() => {
    fetch('/data/suggestions.json')
      .then(res => res.json())
      .then(data => setSuggestionsData(data))
  }, [])

  useEffect(() => {
    setSuggestions(
      props.aliments.filter(aliment =>
        suggestionsData.find(
          suggestionData =>
            Number(suggestionData) === Number(aliment.ciqual_code)
        )
      )
    )
  }, [props.aliments, suggestionsData])

  return (
    <Wrapper small={props.small}>
      {suggestions.map((suggestion, index) => (
        <Suggestion key={suggestion.ciqual_code + index} aliment={suggestion} />
      ))}
    </Wrapper>
  )
}
