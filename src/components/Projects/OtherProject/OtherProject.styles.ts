import styled, { css } from "styled-components/macro"

import { media } from "styles/media-queries"

const underline = css`
  text-decoration-line: underline;
  text-underline-position: under;
`

export const Article = styled.article`
  margin-top: 40px;
`

export const TextContainer = styled.div`
  ${media.desktopUp} {
    display: flex;
  }
`

export const Title = styled.h3`
  text-transform: uppercase;
  color: ${({ theme }) => theme.primary};
  letter-spacing: 0.01em;
  font-size: 17px;
  line-height: 132%;
  ${media.tabletUp} {
    font-size: 21px;
  }
  ${media.desktopUp} {
    line-height: 164%;
    ${underline}
  }
`

export const Description = styled.p`
  letter-spacing: 0.01em;
  font-size: 17px;
  line-height: 171%;
  ${media.tabletUp} {
    font-size: 21px;
  }
  ${media.desktopUp} {
    line-height: 164%;
    ${underline}
    white-space: pre;
    :before {
      content: " ";
    }
  }
`

export const Arrows = styled.span`
  color: ${({ theme }) => theme.primary};
  font-weight: 700;
  ${media.desktopUp} {
    ${underline}
  }
`
