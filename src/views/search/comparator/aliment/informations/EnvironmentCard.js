import React, { useState } from 'react'
import styled from 'styled-components'
import { colors, mq } from 'utils/styles'
import Card from 'components/Card'
import DQR from 'components/DQR'
import IndicateursSelect from './environmentCard/IndicateurSelect'
import { formatNumber } from 'utils/formatters'

const units = {
  Score_unique_EF: 'mPt/kg de produit',
  Changement_climatique: 'kg CO2 eq/kg de produit',
  [`Appauvrissement_de_la_couche_d'ozone`]: 'kg CVC11 eq/kg de produit',
  [`Rayonnements_ionisants`]: 'kBq U-235 eq/kg de produit',
  [`Formation_photochimique_d'ozone`]: 'kg NMVOC eq/kg de produit',
  [`Particules_fines`]: 'disease inc./kg de produit',
  [`Acidification_terrestre_et_eaux_douces`]: 'mol H+ eq/kg de produit',
  [`Eutrophisation_terrestre`]: 'mol N eq/kg de produit',
  [`Eutrophisation_eaux_douces`]: 'kg P eq/kg de produit',
  [`Eutrophisation_marine`]: 'kg N eq/kg de produit',
  [`Utilisation_du_sol`]: 'Pt/kg de produit',
  [`Écotoxicité_pour_écosystèmes_aquatiques_d'eau_douce`]: 'CTUe/kg de produit',
  [`Épuisement_des_ressources_eau`]: 'm3 depriv./kg de produit',
  [`Épuisement_des_ressources_énergétiques`]: 'MJ/kg de produit',
  [`Épuisement_des_ressources_minéraux`]: 'kg Sb eq/kg de produit',
  [`Effets_toxicologiques_sur_la_santé_humaine___substances_non-cancérogènes`]:
    'kg Sb eq/kg de produit',
  [`Effets_toxicologiques_sur_la_santé_humaine___substances_cancérogènes`]:
    'kg Sb eq/kg de produit',
}
const Score = styled.div`
  margin: 2rem 0 3rem;
  text-align: center;
  font-size: ${(props) => (props.large ? '7vw' : '5vw')};
  font-weight: 900;
  font-family: 'Montserrat', sans-serif;
  color: ${colors.main};

  ${mq.mediumPortrait} {
    font-size: 12vw;
  }
  ${mq.small} {
    font-size: 15vw;
  }
  ${mq.large} {
    font-size: ${(props) => (props.large ? '80px' : '70px')};
  }
`
const Unit = styled.div`
  font-size: 18px;
  text-align: center;
`
export default function EnvironmentCard(props) {
  const [indicateur, setIndicateur] = useState('Changement_climatique')
  return (
    <Card large={props.large}>
      <Card.Top>
        <Card.Title>
          <IndicateursSelect setIndicateur={setIndicateur} />
        </Card.Title>
        <Score large={props.large}>
          {formatNumber(props.aliment[indicateur])}
          <Unit>{units[indicateur]}</Unit>
        </Score>

        <DQR large dqr={props.aliment['DQR']} />
      </Card.Top>
    </Card>
  )
}
