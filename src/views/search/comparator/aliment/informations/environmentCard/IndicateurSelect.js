import React from 'react'
import styled from 'styled-components'
import { mq } from 'utils/styles'

const Select = styled.select`
  max-width: 100%;

  ${mq.small} {
    max-width: 70vw;
  }
`
const Option = styled.option``
export default function IndicateursSelect(props) {
  return (
    <Select onChange={(e) => props.setIndicateur(e.target.value)}>
      <Option value="Changement_climatique">Changement climatique</Option>
      <Option value="Score_unique_EF">Score unique EF</Option>
      <Option value={`Appauvrissement_de_la_couche_d'ozone`}>
        Appauvrissement de la couche d'ozone
      </Option>
      <Option value="Rayonnements_ionisants">Rayonnements ionisants</Option>
      <Option value={`Formation_photochimique_d'ozone`}>
        Formation photochimique d'ozone
      </Option>
      <Option value="Particules_fines">Particules</Option>
      <Option value="Acidification_terrestre_et_eaux_douces">
        Acidification terrestre et eaux douces
      </Option>
      <Option value="Eutrophisation_terrestre">Eutrophisation terreste</Option>
      <Option value="Eutrophisation_eaux_douces">
        Eutrophisation eaux douces
      </Option>
      <Option value="Eutrophisation_marine">Eutrophisation marine</Option>
      <Option value="Utilisation_du_sol">Utilisation du sol</Option>
      <Option value={`Écotoxicité_pour_écosystèmes_aquatiques_d'eau_douce`}>
        Écotoxicité pour écosystèmes aquatiques d'eau douce
      </Option>
      <Option value="Épuisement_des_ressources_eau">
        Épuisement des ressources eau
      </Option>
      <Option value="Épuisement_des_ressources_énergétiques">
        Épuisement des ressources énergétiques
      </Option>
      <Option value="Épuisement_des_ressources_minéraux">
        Épuisement des ressources minéraux
      </Option>
      <Option value="Effets_toxicologiques_sur_la_santé_humaine___substances_non-cancérogènes">
        Effets toxicologiques sur la santé humaine : substances non-cancérogènes
      </Option>
      <Option value="Effets_toxicologiques_sur_la_santé_humaine___substances_cancérogènes">
        Effets toxicologiques sur la santé humaine : substances cancérogènes
      </Option>
    </Select>
  )
}
