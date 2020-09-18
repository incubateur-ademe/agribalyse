import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function Aliment(props) {
  const { ciqual_code } = useParams()

  const [currentAliment, setCurrentAliment] = useState(null)

  useEffect(() => {
    setCurrentAliment(
      props.aliments.find(aliment => aliment.ciqual_code === ciqual_code)
    )
  }, [props.aliments, ciqual_code])

  return (
    <div>
      Aliment : {currentAliment ? currentAliment.nom_francais : 'Loading'}
      <br />
      <Link to={'/'}>Retour</Link>
    </div>
  )
}
