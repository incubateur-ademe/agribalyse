import React from 'react'
import styled from 'styled-components'

import { colors, mq } from 'utils/styles'

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
  text-align: ${props => (props.right ? 'right' : 'left')};
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
            <Value>
              {props.aliment[`Score_unique_EF_(mPt/kg_de_produit)`]}
            </Value>
          </Cell>
          <Cell>mPt/kg de produit</Cell>
        </Row>
        <Row>
          <Cell>Changement climatique</Cell>
          <Cell>
            <Value>
              {props.aliment[`Changement_climatique_(kg_CO2_eq/kg_de_produit)`]}
            </Value>
          </Cell>
          <Cell>kg CO2 eq/kg de produit</Cell>
        </Row>
        <Row>
          <Cell>Appauvrissement de la couche d'ozone</Cell>
          <Cell>
            <Value>
              {
                props.aliment[
                  `Appauvrissement_de_la_couche_d'ozone_(E-06_kg_CVC11_eq/kg_de_produit)`
                ]
              }
            </Value>
          </Cell>
          <Cell>E-06 kg CVC11 eq/kg de produit</Cell>
        </Row>
        <Row>
          <Cell>Rayonnements ionisants</Cell>
          <Cell>
            <Value>
              {
                props.aliment[
                  `Rayonnements_ionisants_(kBq_U-235_eq/kg_de_produit)`
                ]
              }
            </Value>
          </Cell>
          <Cell>kBq U-235 eq/kg de produit</Cell>
        </Row>
        <Row>
          <Cell>Formation photochimique d'ozone</Cell>
          <Cell>
            <Value>
              {
                props.aliment[
                  `Formation_photochimique_d'ozone_(E-03_kg_NMVOC_eq/kg_de_produit)`
                ]
              }
            </Value>
          </Cell>
          <Cell>E-03 kg NMVOC eq/kg de produit</Cell>
        </Row>
        <Row>
          <Cell>Particules</Cell>
          <Cell>
            <Value>
              {props.aliment[`Particules_(E-06_disease_inc_/kg_de_produit)`]}
            </Value>
          </Cell>
          <Cell>E-06 disease inc./kg de produit</Cell>
        </Row>
        <Row>
          <Cell>Acidification terrestre et eaux douces</Cell>
          <Cell>
            <Value>
              {
                props.aliment[
                  `Acidification_terrestre_et_eaux_douces_(mol_H+_eq/kg_de_produit)`
                ]
              }
            </Value>
          </Cell>
          <Cell>mol H+ eq/kg de produit</Cell>
        </Row>
        <Row>
          <Cell>Eutrophisation terreste</Cell>
          <Cell>
            <Value>
              {
                props.aliment[
                  `Eutrophisation_terreste_(mol_N_eq/kg_de_produit)`
                ]
              }
            </Value>
          </Cell>
          <Cell>mol N eq/kg de produit</Cell>
        </Row>
        <Row>
          <Cell>Eutrophisation eaux douces</Cell>
          <Cell>
            <Value>
              {
                props.aliment[
                  `Eutrophisation_eaux_douces_(E-03_kg_P_eq/kg_de_produit)`
                ]
              }
            </Value>
          </Cell>
          <Cell>E-03 kg P eq/kg de produit</Cell>
        </Row>
        <Row>
          <Cell>Eutrophisation marine</Cell>
          <Cell>
            <Value>
              {
                props.aliment[
                  `Eutrophisation_marine_(E-03_kg_N_eq/kg_de_produit)`
                ]
              }
            </Value>
          </Cell>
          <Cell>E-03 kg N eq/kg de produit</Cell>
        </Row>
        <Row>
          <Cell>Utilisation du sol</Cell>
          <Cell>
            <Value>
              {props.aliment[`Utilisation_du_sol_(Pt/kg_de_produit)`]}
            </Value>
          </Cell>
          <Cell>Pt/kg de produit</Cell>
        </Row>
        <Row>
          <Cell>Écotoxicité pour écosystèmes aquatiques d'eau douce</Cell>
          <Cell>
            <Value>
              {
                props.aliment[
                  `Écotoxicité_pour_écosystèmes_aquatiques_d'eau_douce_(CTUe/kg_de_produit)`
                ]
              }
            </Value>
          </Cell>
          <Cell>CTUe/kg de produit</Cell>
        </Row>
        <Row>
          <Cell>Épuisement des ressources eau</Cell>
          <Cell>
            <Value>
              {
                props.aliment[
                  `Épuisement_des_ressources_eau_(m3_depriv_/kg_de_produit)`
                ]
              }
            </Value>
          </Cell>
          <Cell>m3 depriv./kg de produit</Cell>
        </Row>
        <Row>
          <Cell>Épuisement des ressources énergétiques</Cell>
          <Cell>
            <Value>
              {
                props.aliment[
                  `Épuisement_des_ressources_énergétiques_(MJ/kg_de_produit)`
                ]
              }
            </Value>
          </Cell>
          <Cell>MJ/kg de produit</Cell>
        </Row>
        <Row>
          <Cell>Épuisement des ressources minéraux</Cell>
          <Cell>
            <Value>
              {
                props.aliment[
                  `Épuisement_des_ressources_minéraux_(E-06_kg_Sb_eq/kg_de_produit)`
                ]
              }
            </Value>
          </Cell>
          <Cell>E-06 kg Sb eq/kg de produit</Cell>
        </Row>
      </tbody>
    </Wrapper>
  )
}
