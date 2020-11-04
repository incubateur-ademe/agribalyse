import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'

import api from 'utils/api'
import SearchContext from 'utils/searchContext'
import DataContext from 'utils/dataContext'

export default function DataProvider(props) {
  const search = useContext(SearchContext)
  const [aliments, setAliments] = useState([])
  useEffect(() => {
    api.fetchAliments(search).then(aliments => setAliments(aliments))
  }, [search])

  const [categories, setCategories] = useState([])
  useEffect(() => {
    api.fetchCategories().then(categories => setCategories(categories))
  }, [])

  const { code_agb } = useParams()
  const [currentAliment, setCurrentAliment] = useState(null)
  useEffect(() => {
    api
      .fetchCurrentAliment(code_agb)
      .then(currentAliment => setCurrentAliment(currentAliment))
  }, [code_agb])

  const [relatedAliments, setRelatedAliments] = useState([])
  useEffect(() => {
    setRelatedAliments([])
    if (currentAliment) {
      api
        .fetchRelatedAliments(currentAliment)
        .then(relatedAliments => setRelatedAliments(relatedAliments))
    }
  }, [currentAliment])

  return (
    <DataContext.Provider
      value={{
        aliments,
        currentAliment,
        relatedAliments,
        categories
      }}
    >
      {props.children}
    </DataContext.Provider>
  )
}
