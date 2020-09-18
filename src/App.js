import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from 'views/Home'
import Aliment from 'views/Aliment'

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
        <Switch>
          <Route path='/aliments/:ciqual_code'>
            <Aliment aliments={aliments} />
          </Route>
          <Route path={['/aliments', '/']}>
            <Home aliments={aliments} />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
