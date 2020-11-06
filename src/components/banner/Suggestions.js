import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { mq } from 'utils/styles'
import Suggestion from './suggestions/Suggestion'
import api from 'utils/api'

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
  const [suggestionsData, setSuggestionsData] = useState([])
  useEffect(() => {
    fetch('/data/suggestions.json')
      .then(res => res.json())
      .then(data => setSuggestionsData(data))
  }, [])

  const [suggestions, setSuggestions] = useState([])

  const setLoaded = props.setLoaded
  useEffect(() => {
    if (suggestionsData.length) {
      api
        .fetchAliments({ code_agb: suggestionsData.join() })
        .then(suggestion => {
          setSuggestions(suggestion.results)
          setLoaded(true)
        })
    }
  }, [suggestionsData, setLoaded])

  return (
    <Wrapper small={props.small}>
      {suggestions.map(suggestion => (
        <Suggestion key={suggestion['Code_AGB']} aliment={suggestion} />
      ))}
    </Wrapper>
  )
}
