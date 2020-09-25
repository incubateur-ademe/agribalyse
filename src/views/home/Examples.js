import React from 'react'
import styled from 'styled-components'

import { colors } from 'utils/styles'
import usecasevaches from 'assets/usecase-vaches.png'
import usecaserie from 'assets/usecase-rie.png'
import usecaseyuka from 'assets/usecase-yuka.png'

import Card from 'components/Card'

const Wrapper = styled.div`
  background-color: ${colors.background};
  /*background: linear-gradient(
    0deg,
    ${colors.white} 0%,
    ${colors.lightMain} 10%,
    ${colors.lightMain} 90%,
    ${colors.white} 100%
  );*/
`
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
const Cards = styled.div`
  display: flex;
  margin: 0 -1em;
`
const Text = styled.p``
export default function Examples() {
  return (
    <Wrapper>
      <Sizer>
        <Title>Exemples de cas d'usage</Title>
        <Cards>
          <Card
            width='33%'
            href='https://ecolab.gitbook.io/documentation-agribalyse/usage-des-donnees/ecoconception'
          >
            <Card.Image src={usecasevaches} />
            <Card.Top>
              <Card.Title>Ecoconception</Card.Title>
              <Text>
                Améliorer vos systèmes de productions et votre gamme de produits
                alimentaires
              </Text>
            </Card.Top>
          </Card>
          <Card
            width='33%'
            href='https://ecolab.gitbook.io/documentation-agribalyse/usage-des-donnees/restauration-collective'
          >
            <Card.Image src={usecaserie} />
            <Card.Top>
              <Card.Title>Restauration collective</Card.Title>
              <Text>Aider vos convives dans leurs choix</Text>
            </Card.Top>
          </Card>
          <Card
            width='33%'
            href='https://ecolab.gitbook.io/documentation-agribalyse/usage-des-donnees/information-environnementale'
          >
            <Card.Image src={usecaseyuka} />
            <Card.Top>
              <Card.Title>
                Informations environnementales applications web et mobiles
              </Card.Title>
              <Text>
                Communiquer les données environnementales à vos utilisateurs
              </Text>
            </Card.Top>
          </Card>
        </Cards>
      </Sizer>
    </Wrapper>
  )
}
