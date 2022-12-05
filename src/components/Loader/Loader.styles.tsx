import styled from "styled-components/macro"

import Lottie from "lottie-react"

import { media } from "utils/media-queries"

export const Animation = styled(Lottie)`
  width: 50%;
  margin: 0 auto;
`

export const Text = styled.p`
  font-size: 17px;
  line-height: 171%;
  text-align: center;
  ${media.tabletUp} {
    font-size: 24px;
  }
  ${media.desktopUp} {
    line-height: 167%;
  }
`
