import React, { useContext } from 'react'
import styled from 'styled-components'

import { mq } from 'utils/styles'
import I18nContext from 'utils/i18nContext'

import Button from 'components/Button'

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

  ${mq.small} {
    flex-direction: column;
  }
`
const Column = styled.div`
  flex: 1;
  margin: 0 2em 4em;
  text-align: center;
`
const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  max-width: 800px;
  margin: 0 auto;

  a {
    flex: 1;
    margin: 0 2em 2em;
  }

  ${mq.small} {
    flex-direction: column;
  }
`
export default function Presentation() {
  const { translate } = useContext(I18nContext)

  return (
    <Wrapper>
      <Sizer>
        <Title>
          {translate(
            `Agribalyse, la base de données environnementale de référence sur des produits agricoles et alimentaires`
          )}
        </Title>
        <Columns>
          <Column>
            {translate(
              `2500 produits, 16 indicateurs construits selon l’approche scientifique de l’Analyse de Cycle de Vie`
            )}
          </Column>
          <Column>
            {translate(
              `Un programme collaboratif associant des scientifiques et experts des secteurs agricoles, agroalimentaires et de l’environnement`
            )}
          </Column>
          <Column>
            {translate(
              `Un outil au service des professionnels agricoles et alimentaires, et des consommateurs`
            )}
          </Column>
        </Columns>
        <Buttons>
          <Button
            expand
            href={translate(
              'https://ecolab.gitbook.io/documentation-agribalyse/acces-donnees'
            )}
          >
            {translate(`Télécharger les données`)}
          </Button>
          <Button
            expand
            hollow
            href={translate(
              'https://ecolab.gitbook.io/documentation-agribalyse'
            )}
          >
            {translate(`Informations, conditions d’usages et documentation`)}
          </Button>
        </Buttons>
      </Sizer>
    </Wrapper>
  )
}
