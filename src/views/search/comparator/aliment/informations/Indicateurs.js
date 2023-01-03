import React from 'react'
import styled from 'styled-components'

import { colors, mq } from 'utils/styles'
import { formatNumber } from 'utils/formatters'
import Tooltip from './indicateurs/Tooltip'

const Wrapper = styled.table`
  border-collapse: collapse;
  margin: 0 0 2em;

  ${mq.small} {
    width: 100%;
    table-layout: fixed;
  }
`
const Row = styled.tr`
  &:nth-child(2n) {
    background-color: ${colors.lightMain};
  }
`
const Head = styled.th`
  padding: 1em;
  text-align: ${(props) => (props.right ? 'right' : 'left')};
`
const Cell = styled.td`
  padding: 1em;
`
const Value = styled.div`
  font-weight: 900;
  font-family: 'Montserrat', sans-serif;
  text-align: right;
`
export default function Indicateurs(props) {
  return (
    <Wrapper>
      <thead>
        <Row>
          <Head>Indicateur</Head>
          <Head right>Mesure</Head>
          <Head>Unité</Head>
        </Row>
      </thead>
      <tbody>
        <Row>
          <Cell>Score unique EF</Cell>
          <Cell>
            <Value>{formatNumber(props.aliment[`Score_unique_EF`])}</Value>
          </Cell>
          <Cell>mPt/kg de produit</Cell>
        </Row>
        <Row>
          <Cell>Changement climatique</Cell>
          <Cell>
            <Value>
              {formatNumber(props.aliment[`Changement_climatique`])}
            </Value>
          </Cell>
          <Cell>kg CO2 eq/kg de produit</Cell>
        </Row>
        <Row>
          <Cell>Appauvrissement de la couche d'ozone</Cell>
          <Cell>
            <Value>
              {formatNumber(
                props.aliment[`Appauvrissement_de_la_couche_d'ozone`]
              )}
            </Value>
          </Cell>
          <Cell>kg CVC11 eq/kg de produit</Cell>
        </Row>
        <Row>
          <Cell>Rayonnements ionisants</Cell>
          <Cell>
            <Value>
              {formatNumber(props.aliment[`Rayonnements_ionisants`])}
            </Value>
          </Cell>
          <Cell>kBq U-235 eq/kg de produit</Cell>
        </Row>
        <Row>
          <Cell>Formation photochimique d'ozone</Cell>
          <Cell>
            <Value>
              {formatNumber(props.aliment[`Formation_photochimique_d'ozone`])}
            </Value>
          </Cell>
          <Cell>kg NMVOC eq/kg de produit</Cell>
        </Row>
        <Row>
          <Cell>Particules</Cell>
          <Cell>
            <Value>{formatNumber(props.aliment[`Particules_fines`])}</Value>
          </Cell>
          <Cell>disease inc./kg de produit</Cell>
        </Row>
        <Row>
          <Cell>Acidification terrestre et eaux douces</Cell>
          <Cell>
            <Value>
              {formatNumber(
                props.aliment[`Acidification_terrestre_et_eaux_douces`]
              )}
            </Value>
          </Cell>
          <Cell>mol H+ eq/kg de produit</Cell>
        </Row>
        <Row>
          <Cell>Eutrophisation terreste</Cell>
          <Cell>
            <Value>
              {formatNumber(props.aliment[`Eutrophisation_terrestre`])}
            </Value>
          </Cell>
          <Cell>mol N eq/kg de produit</Cell>
        </Row>
        <Row>
          <Cell>Eutrophisation eaux douces</Cell>
          <Cell>
            <Value>
              {formatNumber(props.aliment[`Eutrophisation_eaux_douces`])}
            </Value>
          </Cell>
          <Cell>kg P eq/kg de produit</Cell>
        </Row>
        <Row>
          <Cell>Eutrophisation marine</Cell>
          <Cell>
            <Value>
              {formatNumber(props.aliment[`Eutrophisation_marine`])}
            </Value>
          </Cell>
          <Cell>kg N eq/kg de produit</Cell>
        </Row>
        <Row>
          <Cell>Utilisation du sol</Cell>
          <Cell>
            <Value>{formatNumber(props.aliment[`Utilisation_du_sol`])}</Value>
          </Cell>
          <Cell>Pt/kg de produit</Cell>
        </Row>
        <Row>
          <Cell>Écotoxicité pour écosystèmes aquatiques d'eau douce</Cell>
          <Cell>
            <Value>
              {formatNumber(
                props.aliment[
                  `Écotoxicité_pour_écosystèmes_aquatiques_d'eau_douce`
                ]
              )}
            </Value>
          </Cell>
          <Cell>CTUe/kg de produit</Cell>
        </Row>
        <Row>
          <Cell>Épuisement des ressources eau</Cell>
          <Cell>
            <Value>
              {formatNumber(props.aliment[`Épuisement_des_ressources_eau`])}
            </Value>
          </Cell>
          <Cell>m3 depriv./kg de produit</Cell>
        </Row>
        <Row>
          <Cell>Épuisement des ressources énergétiques</Cell>
          <Cell>
            <Value>
              {formatNumber(
                props.aliment[`Épuisement_des_ressources_énergétiques`]
              )}
            </Value>
          </Cell>
          <Cell>MJ/kg de produit</Cell>
        </Row>
        <Row>
          <Cell>Épuisement des ressources minéraux</Cell>
          <Cell>
            <Value>
              {formatNumber(
                props.aliment[`Épuisement_des_ressources_minéraux`]
              )}
            </Value>
          </Cell>
          <Cell>kg Sb eq/kg de produit</Cell>
        </Row>
        <Row>
          <Cell>
            Effets toxicologiques sur la santé humaine : substances
            non-cancérogènes <Tooltip />
          </Cell>
          <Cell>
            <Value>
              {formatNumber(
                props.aliment[
                  `Effets_toxicologiques_sur_la_santé_humaine___substances_non-cancérogènes`
                ]
              )}
            </Value>
          </Cell>
          <Cell>kg Sb eq/kg de produit</Cell>
        </Row>
        <Row>
          <Cell>
            Effets toxicologiques sur la santé humaine : substances cancérogènes{' '}
            <Tooltip />
          </Cell>
          <Cell>
            <Value>
              {formatNumber(
                props.aliment[
                  `Effets_toxicologiques_sur_la_santé_humaine___substances_cancérogènes`
                ]
              )}
            </Value>
          </Cell>
          <Cell>kg Sb eq/kg de produit</Cell>
        </Row>
      </tbody>
    </Wrapper>
  )
}
