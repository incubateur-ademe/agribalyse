import React, { useState } from 'react'

import SearchContext from 'utils/searchContext'

import Banner from './home/Banner'
import Breadcrumb from 'components/layout/Breadcrumb'
import Suggestions from './home/Suggestions'
import Aliments from './home/Aliments'

export default function Home(props) {
  const [search, setSearch] = useState('')
  const [categories, setCategories] = useState([])
  const [sort, setSort] = useState('score_asc')

  return (
    <div>
      <SearchContext.Provider
        value={{ search, setSearch, categories, setCategories, sort, setSort }}
      >
        <Banner />
        <Breadcrumb />
        <Suggestions />
        <Aliments aliments={props.aliments} />
      </SearchContext.Provider>
    </div>
  )
}
