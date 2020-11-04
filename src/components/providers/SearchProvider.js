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
  const [sort, setSort] = useState(
    query.get('order') || 'Nom_du_Produit_en_Français'
  )
  const [page, setPage] = useState(Number(query.get('page')) || 1)
  const [size, setSize] = useState(Number(query.get('size')) || 20)

  useEffect(() => {
    let tempSearch = []

    if (search) {
      tempSearch.push(`search=${encodeURIComponent(search)}`)
    }
    if (categories.length) {
      tempSearch.push(`categories=${encodeURIComponent(categories[0])}`)
    }
    if (subCategories.length) {
      tempSearch.push(
        `subCategories=${encodeURIComponent(subCategories.concat(','))}`
      )
    }
    if (sort) {
      tempSearch.push(`sort=${encodeURIComponent(sort)}`)
    }
    if (page) {
      tempSearch.push(`page=${encodeURIComponent(page)}`)
    }
    if (size) {
      tempSearch.push(`size=${encodeURIComponent(size)}`)
    }
    history.replace({
      search: '?' + tempSearch.join('&')
    })
  }, [search, categories, subCategories, sort, history, page, size])

  useEffect(() => {
    setPage(1)
  }, [search, categories, subCategories, sort, size])

  const [loading, setLoading] = useState(false)

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
        setSort,
        page,
        setPage,
        size,
        setSize,
        loading,
        setLoading
      }}
    >
      {props.children}
    </SearchContext.Provider>
  )
}
