import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { mq } from 'utils/styles'
import Suggestion from './suggestions/Suggestion'
import api from 'utils/api'

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 49vw;
  max-height: ${(props) => (props.small ? 0 : '15vw')};
  margin: 0 -0.5vw 1vw;
  opacity: ${(props) => (props.small ? 0 : 1)};
  pointer-events: ${(props) => (props.small ? 'none' : 'inherit')};
  transition: all 600ms;

  ${mq.medium} {
    width: 70vw;
  }
  ${mq.mediumPortrait} {
    width: auto;
  }
  ${mq.small} {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-height: none;
  }
  ${mq.large} {
    width: 55vw;
  }
`
export default function Suggestions(props) {
  const [suggestionsData, setSuggestionsData] = useState([])
  useEffect(() => {
    fetch('/data/suggestions.json')
      .then((res) => res.json())
      .then((data) => setSuggestionsData(data))
  }, [])

  const [suggestions, setSuggestions] = useState([])

  const setLoaded = props.setLoaded
  useEffect(() => {
    if (suggestionsData.length) {
      api
        .fetchAliments({ code_agb: suggestionsData.join() })
        .then((suggestion) => {
          setSuggestions(suggestion.results)
          setLoaded(true)
        })
    }
  }, [suggestionsData, setLoaded])

  return (
    <Wrapper small={props.small}>
      {suggestions.map((suggestion) => (
        <Suggestion key={suggestion['Code_AGB']} aliment={suggestion} />
      ))}
    </Wrapper>
  )
}
