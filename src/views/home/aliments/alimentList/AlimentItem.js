import React from 'react'
import { Link } from 'react-router-dom'

export default function AlimentItem(props) {
  return (
    <div>
      <Link to={`/aliments/${props.aliment.ciqual_code}`}>
        Aliment : {props.aliment.nom_francais}
      </Link>
    </div>
  )
}
