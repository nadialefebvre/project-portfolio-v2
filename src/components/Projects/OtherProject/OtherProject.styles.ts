import styled from "styled-components/macro"

import { media } from "styles/media-queries"

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
  color: ${(props) => props.theme.primary};
  letter-spacing: 0.01em;
  font-size: 17px;
  line-height: 132%;
  ${media.tabletUp} {
    font-size: 21px;
  }
  ${media.desktopUp} {
    line-height: 164%;
    text-decoration-line: underline;
    text-underline-position: under;
    :hover {
      text-decoration-line: underline;
      text-underline-position: under;
    }
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
    text-decoration-line: underline;
    text-underline-position: under;
    white-space: pre;
    :before {
      content: " ";
    }
    :hover {
      text-decoration-line: underline;
      text-underline-position: under;
    }
  }
`

export const Arrows = styled.span`
  color: ${(props) => props.theme.primary};
  font-weight: 700;
  ${media.desktopUp} {
    text-decoration-line: underline;
    text-underline-position: under;
  }
`
