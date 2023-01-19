import styled, { css } from "styled-components/macro"

import { media } from "styles/media-queries"

const underline = css`
  text-decoration-line: underline;
  text-underline-position: under;
`

export const Article = styled.article`
  margin-top: 24px;
  line-height: 171%;
`

export const Title = styled.h3`
  font-size: 17px;
  ${underline}
  ${media.tabletUp} {
    font-size: 21px;
  }
  ${media.desktopUp} {
    line-height: 132%;
  }
`

export const DateString = styled.span`
  font-size: 17px;
  font-weight: 400;
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary};
  ${underline}
  ${media.tabletUp} {
    font-size: 21px;
  }
  ${media.desktopUp} {
    line-height: 132%;
  }
`

export const Arrows = styled.span`
  color: ${({ theme }) => theme.primary};
  ${underline}
`
