import { useState, useEffect, useContext } from 'react'

import SearchContext from 'utils/searchContext'

export default function useAlimentsFilters(aliments) {
  const [filteredAliments, setFilteredAliments] = useState([])

  const { search, categories, subCategories, sort } = useContext(SearchContext)

  useEffect(() => {
    setFilteredAliments(
      aliments
        .filter(aliment => {
          const sentence = search
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
            .split(' ')
          let occurence = 0
          for (let word of sentence) {
            if (
              aliment.nom_francais
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .toLowerCase()
                .includes(word)
            ) {
              occurence++
            }
          }
          return occurence === sentence.length
        })
        .filter(aliment =>
          categories.length ? categories.includes(aliment.groupe) : true
        )
        .filter(aliment =>
          subCategories.length
            ? subCategories.includes(aliment.sous_groupe)
            : true
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
  }, [search, categories, subCategories, sort, aliments])

  return filteredAliments
}
