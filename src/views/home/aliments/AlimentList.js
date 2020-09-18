import React, { useState } from 'react'

import useAlimentsFilters from 'hooks/useAlimentsFilters'

import AlimentItem from './alimentList/AlimentItem'
import Pagination from './alimentList/Pagination'

export default function AlimentList(props) {
  const filteredAliments = useAlimentsFilters(props.aliments)

  const perPage = 10

  const [page, setPage] = useState(0)
  console.log(page, perPage)
  console.log(page * perPage < 0)
  return (
    <div>
      {filteredAliments.map(
        (aliment, index) =>
          page * perPage <= index &&
          (page + 1) * perPage > index && (
            <AlimentItem aliment={aliment} key={aliment.ciqual_code + index} />
          )
      )}
      <Pagination
        total={Math.ceil(filteredAliments.length / perPage)}
        page={page}
        setPage={setPage}
      />
    </div>
  )
}
