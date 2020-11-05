import React, { useState } from 'react'

import {
  useQueryParam,
  NumberParam,
  StringParam,
  ArrayParam,
  withDefault
} from 'use-query-params'

import SearchContext from 'utils/searchContext'
import usePageView from 'hooks/usePageView'

export default function SearchProvider(props) {
  usePageView()

  const [search, setSearch] = useQueryParam(
    'search',
    withDefault(StringParam, '')
  )
  const [categories, setCategories] = useQueryParam(
    'categories',
    withDefault(ArrayParam, [])
  )
  const [subCategories, setSubCategories] = useQueryParam(
    'subCategories',
    withDefault(ArrayParam, [])
  )
  const [sort, setSort] = useQueryParam(
    'sort',
    withDefault(StringParam, 'Nom_du_Produit_en_Français')
  )
  const [page, setPage] = useQueryParam('page', withDefault(NumberParam, 1))
  const [size, setSize] = useQueryParam('size', withDefault(NumberParam, 20))

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
        setSort,
        sort,
        page,
        size,
        setPage,
        setSize,
        loading,
        setLoading
      }}
    >
      {props.children}
    </SearchContext.Provider>
  )
}
