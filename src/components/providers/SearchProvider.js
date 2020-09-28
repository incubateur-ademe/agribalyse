import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'

import SearchContext from 'utils/searchContext'

export default function SearchProvider(props) {
  let history = useHistory()
  let location = useLocation()
  const query = new URLSearchParams(location.search)

  const [search, setSearch] = useState(
    query.get('search') ? decodeURIComponent(query.get('search')) : ''
  )
  const [categories, setCategories] = useState(
    query.get('categories') ? [decodeURIComponent(query.get('categories'))] : []
  )
  const [subCategories, setSubCategories] = useState(
    query.get('subCategories')
      ? query
          .get('subCategories')
          .split(',')
          .map(subCategory => decodeURIComponent(subCategory))
          .filter(subCategory => subCategory)
      : []
  )
  const [sort, setSort] = useState(query.get('order') || 'alph_asc')

  useEffect(() => {
    let tempSearch = '?'

    if (search) {
      tempSearch += `search=${encodeURIComponent(search)}&`
    }
    if (categories.length) {
      tempSearch += `categories=${encodeURIComponent(categories[0])}&`
    }
    if (subCategories.length) {
      tempSearch += `subCategories=${encodeURIComponent(
        subCategories.concat(',')
      )}&`
    }
    if (sort) {
      tempSearch += `order=${encodeURIComponent(sort)}`
    }
    history.push({
      search: tempSearch
    })
  }, [search, categories, subCategories, sort, history])
  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        categories,
        setCategories,
        subCategories,
        setSubCategories,
        sort,
        setSort
      }}
    >
      {props.children}
    </SearchContext.Provider>
  )
}
