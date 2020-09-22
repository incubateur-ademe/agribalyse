import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Suggestion from './suggestions/Suggestion'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 49vw;
  margin: 0 -0.5vw;
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
    <Wrapper>
      {suggestions.map((suggestion, index) => (
        <Suggestion key={suggestion.ciqual_code + index} aliment={suggestion} />
      ))}
    </Wrapper>
  )
}
