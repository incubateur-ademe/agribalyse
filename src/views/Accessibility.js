import Banner from 'components/Banner'
import SearchProvider from 'components/providers/SearchProvider'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4em 2em;
`

export default function Accessibility() {
  return (
    <SearchProvider>
      <Banner />
      <Wrapper>
        <h1>DÉCLARATION D’ACCESSIBILITÉ</h1>
        <p>
          L’ADEME s’engage à rendre ses sites internet, intranet, extranet et
          ses applications mobiles, etc. accessibles conformément à l’article 47
          de la loi n° 2005-102 du 11 février 2005.
        </p>

        <p>
          A cette fin, il met en œuvre la stratégie et les actions suivantes :
        </p>
        <ul>
          <li>
            <a
              href="https://librairie.ademe.fr/institutionnel/6794-schema-pluriannuel-de-mise-en-accessibilite-des-sites-web-de-l-ademe.html"
              target="_blank">
              Schéma pluriannuel en cours
            </a>
          </li>
          <li>
            <a
              href="https://librairie.ademe.fr/institutionnel/6823-plan-annuel-de-mise-en-accessibilite-des-sites-web-de-l-ademe.html"
              target="_blank">
              Plan d’action de l’année en cours
            </a>
          </li>
        </ul>

        <p>
          Cette déclaration d’accessibilité s’applique au site
          agribalyse.ademe.fr
        </p>

        <h2>ÉTAT DE CONFORMITÉ</h2>
        <p>
          En l’absence d’audit et dans l’attente de celui-ci, le site
          agribalyse.ademe.fr n’est pas en conformité avec le référentiel
          général d’amélioration de l’accessibilité. Les non-conformités et/ou
          les dérogations sont énumérées ci-dessous.
        </p>

        <h2>RÉSULTATS DES TESTS</h2>

        <p>Néant</p>

        <h2>CONTENUS NON ACCESSIBLES</h2>

        <p>
          Les contenus listés ci-dessous ne sont pas accessibles pour les
          raisons suivantes.
        </p>
        <h2>Non-conformité</h2>
        <p>Néant</p>
        <h2>Dérogations pour charge disproportionnée</h2>
        <p>Néant</p>
        <h2>Contenus non soumis à l’obligation d’accessibilité</h2>
        <p>Néant</p>
        <h2>ÉTABLISSEMENT DE CETTE DÉCLARATION D’ACCESSIBILITÉ</h2>
        <p>Cette déclaration a été établie le 12/06/2024.</p>
        <h2>RETOUR D’INFORMATION ET CONTACT</h2>
        <p>
          Si vous n’arrivez pas à accéder à un contenu ou à un service, vous
          pouvez contacter le responsable du site internet pour être orienté
          vers une alternative accessible ou obtenir le contenu sous une autre
          forme. · Envoyer un message au référent accessibilité de l'ADEME ·
          Contacter Estelle Ribot, ADEME, DEMTE — 20 avenue du Grésillé BP 90
          406 – 49 004 Angers Cedex 01
        </p>
        <h2>OIES DE RECOURS</h2>
        <p>
          Cette procédure est à utiliser dans le cas suivant. Vous avez signalé
          au responsable du site internet un défaut d’accessibilité qui vous
          empêche d’accéder à un contenu ou à un des services du portail et vous
          n’avez pas obtenu de réponse satisfaisante. · Écrire un message au
          Défenseur des droits (https://formulaire.defenseurdesdroits.fr/) ·
          Contacter le délégué du Défenseur des droits dans votre région
          (https://www.defenseurdesdroits.fr/saisir/delegues) · Envoyer un
          courrier par la poste (gratuit, ne pas mettre de timbre) o Défenseur
          des droits Libre réponse 71120 75342 Paris CEDEX 07
        </p>
      </Wrapper>
    </SearchProvider>
  )
}
