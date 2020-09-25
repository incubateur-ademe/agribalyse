import React from 'react'
import styled from 'styled-components'
import YouTube from 'react-youtube'

import { colors } from 'utils/styles'

const Wrapper = styled.div`
  background-color: ${colors.lightMain};
`
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
const VideoWrapper = styled.div`
  display: flex;
  justify-content: center;
`
export default function Video() {
  return (
    <Wrapper>
      <Sizer>
        <Title>Vidéo explicative du programme</Title>
        <VideoWrapper>
          <YouTube videoId='DNdv0TbxJgc' />
        </VideoWrapper>
      </Sizer>
    </Wrapper>
  )
}
