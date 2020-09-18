import { useState, useEffect, useContext } from 'react'

import SearchContext from 'utils/searchContext'

export default function useAlimentsFilters(aliments) {
  const [filteredAliments, setFilteredAliments] = useState([])

  const { search, categories, sort } = useContext(SearchContext)

  useEffect(() => {
    setFilteredAliments(
      aliments
        .filter(aliment => aliment.nom_francais.includes(search))
        .filter(aliment =>
          categories.length ? categories.includes(aliment.sous_groupe) : true
        )
        .sort((a, b) => {
          if (sort === 'score_asc') {
            return a['impact_environnemental']['Score unique EF']['synthese'] <
              b['impact_environnemental']['Score unique EF']['synthese']
              ? -1
              : 1
          }
          if (sort === 'score_desc') {
            return a['impact_environnemental']['Score unique EF']['synthese'] >
              b['impact_environnemental']['Score unique EF']['synthese']
              ? -1
              : 1
          }
          if (sort === 'co2_asc') {
            return a['impact_environnemental']['Changement climatique'][
              'synthese'
            ] < b['impact_environnemental']['Changement climatique']['synthese']
              ? -1
              : 1
          }
          if (sort === 'co2_desc') {
            return a['impact_environnemental']['Changement climatique'][
              'synthese'
            ] > b['impact_environnemental']['Changement climatique']['synthese']
              ? -1
              : 1
          }
          return true
        })
    )
  }, [search, categories, sort, aliments])

  return filteredAliments
}
