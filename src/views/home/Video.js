import React, { useContext } from 'react'
import styled from 'styled-components'

import { colors, mq } from 'utils/styles'
import I18nContext from 'utils/i18nContext'

const Wrapper = styled.div`
  background-color: ${colors.lightMain};
`
const Sizer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4em 2em;

  ${mq.small} {
    padding: 0;
  }
`
const Title = styled.h2`
  text-align: center;
  max-width: 800px;
  margin: 0 auto 2em;

  ${mq.small} {
    display: none;
  }
`
const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 25;
  height: 0;
`
const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`
export default function Video() {
  const { translate, lang } = useContext(I18nContext)

  return (
    <Wrapper>
      <Sizer>
        <Title>{translate(`Vidéo explicative du programme`)}</Title>
        <VideoWrapper>
          <Iframe
            src={`https://www.youtube.com/embed/${lang === 'fr' ? 'DNdv0TbxJgc' : 'XyxFXzJnMIE'}`}
            frameBorder='0'
          />
        </VideoWrapper>
      </Sizer>
    </Wrapper>
  )
}
