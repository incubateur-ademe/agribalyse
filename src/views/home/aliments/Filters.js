import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Category from './filters/Category'

const Title = styled.h3``
const Categories = styled.ul``
export default function Filters(props) {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    let tempCategories = []

    for (let aliment of props.aliments) {
      if (!tempCategories.find(category => category === aliment.sous_groupe)) {
        tempCategories.push(aliment.sous_groupe)
      }
    }
    setCategories(tempCategories)
  }, [props.aliments])

  return (
    <div>
      <Title>Filters</Title>
      <Categories>
        {categories.map((category, index) => (
          <Category key={index} category={category} />
        ))}
      </Categories>
    </div>
  )
}
