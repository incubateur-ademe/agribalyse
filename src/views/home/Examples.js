import React, { useContext } from 'react'
import styled from 'styled-components'

import { colors, mq } from 'utils/styles'
import I18nContext from 'utils/i18nContext'

import usecasevaches from 'assets/usecase-vaches.png'
import usecaserie from 'assets/usecase-rie.png'
import usecaseyuka from 'assets/usecase-yuka.png'

import Card from 'components/Card'

const Wrapper = styled.div`
  background-color: ${colors.lightSecondary};
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

  ${mq.small} {
    flex-direction: column;
  }
`
const Text = styled.p``
export default function Examples() {
  const { translate } = useContext(I18nContext)

  return (
    <Wrapper>
      <Sizer>
        <Title>{translate(`Exemples de cas d'usage`)}</Title>
        <Cards>
          <Card
            href={translate(
              'https://doc.agribalyse.fr/documentation/usage-des-donnees/ecoconception'
            )}
          >
            <Card.Image src={usecasevaches} />
            <Card.Top>
              <Card.Title>{translate(`Ecoconception`)}</Card.Title>
              <Text>
                {translate(
                  `Améliorer vos systèmes de productions et votre gamme de produits alimentaires`
                )}
              </Text>
            </Card.Top>
          </Card>
          <Card
            href={translate(
              'https://doc.agribalyse.fr/documentation/usage-des-donnees/restauration-collective'
            )}
          >
            <Card.Image src={usecaserie} />
            <Card.Top>
              <Card.Title>{translate(`Restauration collective`)}</Card.Title>
              <Text>{translate(`Aider vos convives dans leurs choix`)}</Text>
            </Card.Top>
          </Card>
          <Card
            href={translate(
              'https://doc.agribalyse.fr/documentation/usage-des-donnees/information-environnementale'
            )}
          >
            <Card.Image src={usecaseyuka} />
            <Card.Top>
              <Card.Title>
                {translate(
                  `Informations environnementales applications web et mobiles`
                )}
              </Card.Title>
              <Text>
                {translate(
                  `Communiquer les données environnementales à vos utilisateurs`
                )}
              </Text>
            </Card.Top>
          </Card>
        </Cards>
      </Sizer>
    </Wrapper>
  )
}
