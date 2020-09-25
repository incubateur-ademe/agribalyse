import React from 'react'

import Card from 'components/Card'
import Button from 'components/Button'

export default function ExplanationsCard() {
  return (
    <Card width='33%'>
      <Card.Top>
        <Card.Title>Comment comprendre ces données ?</Card.Title>
        <p>
          Ces chiffres ont été établis en suivant la méthode du d’analyse du
          cycle de vie (ACV). Une ACV se fonde sur plusieurs critères d’analyse
          des flux entrants et sortants. On appelle « flux » tout ce qui entre
          dans la fabrication du produit et tout ce qui sort en matière de
          pollution. Pour comprendre les valeurs présentées et les modes
          d’analyse, vous pouvez consulter notre documentation.
        </p>
      </Card.Top>
      <Card.Bottom>
        <Button expand>Documentation</Button>
        <Button expand hollow>
          Télécharger la base
        </Button>
      </Card.Bottom>
    </Card>
  )
}
