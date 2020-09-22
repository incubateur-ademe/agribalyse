import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Category from './filters/Category'

const Wrapper = styled.div`
  width: 250px;
  margin: 0 0 2em 2em;
`
const Title = styled.h2``
const Categories = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`
export default function Filters(props) {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    let tempCategories = []

    for (let aliment of props.aliments) {
      if (!tempCategories.find(category => category.title === aliment.groupe)) {
        tempCategories.push({
          title: aliment.groupe,
          subCategories: []
        })
      }

      if (
        !tempCategories
          .find(category => category.title === aliment.groupe)
          .subCategories.find(category => category === aliment.sous_groupe)
      ) {
        tempCategories
          .find(category => category.title === aliment.groupe)
          .subCategories.push(aliment.sous_groupe)
      }
    }
    setCategories(tempCategories)
  }, [props.aliments])

  return (
    <Wrapper>
      <Title>Catégories</Title>
      <Categories>
        {categories.map((category, index) => (
          <Category key={index} category={category} />
        ))}
      </Categories>
    </Wrapper>
  )
}
