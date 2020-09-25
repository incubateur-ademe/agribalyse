import React, { useContext } from 'react'
import styled from 'styled-components'

import SearchContext from 'utils/searchContext'
import boissons from 'assets/groupes/boissons.jpg'
import condiments from 'assets/groupes/condiments.jpg'
import confiseries from 'assets/groupes/confiseries.jpg'
import desserts from 'assets/groupes/desserts.jpg'
import fruitslegumes from 'assets/groupes/fruitslegumes.jpg'
import laitoeuf from 'assets/groupes/laitoeuf.jpg'
import platscomposes from 'assets/groupes/platscomposes.jpg'
import viandespoissons from 'assets/groupes/viandespoissons.jpg'
import Card from 'components/Card'

const Wrapper = styled.div``
const Sizer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4em 2em;
`
const Title = styled.h2`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2em;
`
const CategoryWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 -1em;
`
export default function Categories(props) {
  const { setCategories, setSubCategories } = useContext(SearchContext)

  const getImage = category => {
    return category === 'aides culinaires et ingrédients divers'
      ? condiments
      : category === 'produits céréaliers'
      ? laitoeuf
      : category === 'fruits, légumes, légumineuses et oléagineux'
      ? fruitslegumes
      : category === 'viandes, œufs, poissons'
      ? viandespoissons
      : category === 'aliments infantiles'
      ? laitoeuf
      : category === 'glaces et sorbets'
      ? desserts
      : category === 'entrées et plats composés'
      ? platscomposes
      : category === 'boissons'
      ? boissons
      : category === 'matières grasses'
      ? laitoeuf
      : category === 'produits sucrés'
      ? confiseries
      : category === 'lait et produits laitiers'
      ? laitoeuf
      : laitoeuf
  }

  return (
    <Wrapper>
      <Sizer>
        <Title>Categories</Title>
        <CategoryWrapper>
          {props.categories.map(category => (
            <Card
              key={category.title}
              width='25%'
              to={`/aliments`}
              onClick={() => {
                setCategories([category.title])
                setSubCategories([])
              }}
            >
              <Card.Image src={getImage(category.title)} />
              <Card.Legend>{category.title}</Card.Legend>
            </Card>
          ))}
        </CategoryWrapper>
      </Sizer>
    </Wrapper>
  )
}
