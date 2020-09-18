import React from 'react'

import Filters from './aliments/Filters'
import Sort from './aliments/Sort'
import AlimentList from './aliments/AlimentList'

export default function Aliments(props) {
  return (
    <div>
      <Filters aliments={props.aliments} />
      <Sort />
      <AlimentList aliments={props.aliments} />
    </div>
  )
}
