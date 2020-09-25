import React from 'react'
import styled from 'styled-components'

import ButtonLink from 'components/ButtonLink'

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
const Columns = styled.div`
  display: flex;
  margin: 0 -2em;
`
const Column = styled.div`
  flex: 1;
  margin: 0 2em 2em;
  text-align: center;
`
const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 800px;
  margin: 0 auto;

  a {
    margin: 0 2em 2em;
  }
`
export default function Presentation() {
  return (
    <Wrapper>
      <Sizer>
        <Title>
          Agribalyse, la base de données environnementale de référence sur des
          produits agricoles et alimentaires
        </Title>
        <Columns>
          <Column>
            2500 produits, 14 indicateurs construits selon l’approche
            scientifique de l’Analyse de Cycle de Vie
          </Column>
          <Column>
            Un programme collaboratif associant des scientifiques et experts des
            secteurs agricoles, agroalimentaires et de l’environnement
          </Column>
          <Column>
            Un outil au service des professionnels agricoles et alimentaires, et
            des consommateurs
          </Column>
        </Columns>
        <Buttons>
          <ButtonLink
            expand
            href='https://ecolab.gitbook.io/documentation-agribalyse/acces-donnees'
          >
            Télécharger les données
          </ButtonLink>
          <ButtonLink
            expand
            hollow
            href='https://ecolab.gitbook.io/documentation-agribalyse'
          >
            Information, conditions d’usage et documentation
          </ButtonLink>
        </Buttons>
      </Sizer>
    </Wrapper>
  )
}
