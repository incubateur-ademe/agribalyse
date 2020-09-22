import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { GlobalStyle } from 'utils/styles'

import Home from 'views/Home'

function App() {
  const [aliments, setAliments] = useState([])

  useEffect(() => {
    fetch('/data/Agribalyse.json')
      .then(res => res.json())
      .then(data => setAliments(data))
  }, [])

  return (
    <div>
      <Router>
        <GlobalStyle />
        <Home aliments={aliments} />
      </Router>
    </div>
  )
}

export default App
