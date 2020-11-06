import React from 'react'

export default React.createContext({
  search: '',
  setSearch: () => '',
  categories: [],
  setCategories: () => '',
  subCategories: [],
  setSubCategories: () => '',
  sort: [],
  setSort: () => '',
  page: 0,
  setPage: () => '',
  size: 0,
  setSize: () => ''
})
