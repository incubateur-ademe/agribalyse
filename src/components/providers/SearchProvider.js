import React, { useEffect, useState } from 'react'

import {
  useQueryParam,
  NumberParam,
  StringParam,
  ArrayParam,
  withDefault
} from 'use-query-params'

import SearchContext from 'utils/searchContext'
import usePageView from 'hooks/usePageView'
import api from 'utils/api'

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
    withDefault(StringParam, 'Pertinence')
  )
  const [page, setPage] = useQueryParam('page', withDefault(NumberParam, 1))
  const [size, setSize] = useQueryParam('size', withDefault(NumberParam, 20))

  const [loading, setLoading] = useState(true)

  const [aliments, setAliments] = useState([])
  useEffect(() => {
    setLoading(true)
    api
      .fetchEveryAliments()
      .then(aliments => {
        setAliments(aliments)
        setLoading(false)
      })
  }, [])

  if (aliments.length === 0) {
    return null
  }

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
        setLoading,
        aliments
      }}
    >
      {props.children}
    </SearchContext.Provider>
  )
}
