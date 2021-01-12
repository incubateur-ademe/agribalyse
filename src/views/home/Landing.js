import React, { useContext } from 'react'
import styled from 'styled-components'

import { mq } from 'utils/styles'
import useWindowSize from 'hooks/useWindowSize'
import I18nContext from 'utils/i18nContext'

import logo from 'assets/logo.png'
import background from 'assets/background.jpg'
import repufrancaise from 'assets/repufrancaise.jpg'
import ademe from 'assets/ademe.jpg'

import LanguageSelector from './landing/LanguageSelector'
import Button from 'components/Button'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.windowHeight + 'px'};
  background-image: url(${background});
  background-size: cover;
  background-position: center;
`
const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2vw 2vw 10vw;
`
const Title = styled.h1`
  width: 48vw;
  font-size: 2.4vw;
  font-weight: 900;
  text-align: center;

  ${mq.mediumPortrait} {
    width: auto;
    font-size: 4.8vw;
  }

  ${mq.small} {
    font-size: 7vw;
    text-align: center;
  }

  ${mq.large} {
    width: 40vw;
    font-size: 2vw;
  }
`
const ButtonWrapper = styled.div`
  margin-bottom: 2em;
`
const Partners = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  bottom: 1vw;
  width: 100%;
`
const Partner = styled.img`
  width: auto;
  height: 10vw;

  ${mq.mediumPortrait} {
    height: 20vw;
  }
`
const Logo = styled.img`
  width: 10vw;
  margin-bottom: 1vw;

  ${mq.mediumPortrait} {
    width: 20vw;
    margin-bottom: 2vw;
  }

  ${mq.small} {
    width: 30vw;
    margin-bottom: 3vw;
  }
`

export default function Landing() {
  const windowSize = useWindowSize()

  const { translate } = useContext(I18nContext)

  return (
    <Wrapper windowHeight={windowSize.height}>
      <LanguageSelector />
      <Content>
        <Logo src={logo} alt={'Agribalyse'} />
        <Title>
          {translate(
            `Découvrez l’impact environnemental de votre assiette selon les indicateurs ACV`
          )}
        </Title>
        <ButtonWrapper>
          <Button to='/app' size='big'>
            {translate(`Parcourir les données`)}
          </Button>
        </ButtonWrapper>
        <ButtonWrapper>
          <Button
            href='https://ecolab.gitbook.io/documentation-agribalyse'
            hollow
          >
            {translate(`Informations, conditions d’usages et documentation`)}
          </Button>
        </ButtonWrapper>
      </Content>
      <Partners>
        <Partner src={repufrancaise} />
        <Partner src={ademe} />
      </Partners>
    </Wrapper>
  )
}
