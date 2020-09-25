import styled from 'styled-components'

import { colors } from 'utils/styles'

export default styled.h3`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  min-height: 5.45em;
  margin: 0;
  padding: 1em;
  text-align: center;
  color: ${colors.black};
  background-color: rgba(255, 255, 255, 0.5);
  transition: all 300ms ease-out;

  a:hover > & {
    background-color: rgba(255, 255, 255, 0.7);
  }
`
