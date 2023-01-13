import styled from "styled-components/macro"

import { media } from "styles/media-queries"

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 302px;
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.white};
  ${media.tabletUp} {
    height: 436px;
  }
  ${media.desktopUp} {
    height: 570px;
  }
`

export const Heading = styled.h2`
  font-size: 21px;
  line-height: 119%;
  color: ${props => props.theme.white};
  text-transform: uppercase;
  ${media.tabletUp} {
    font-size: 30px;
  }
  ${media.desktopUp} {
    font-size: 38px;
    line-height: 124%;
  }
`

export const TextContainer = styled.div`
  margin-top: 41px;
  font-size: 17px;
  line-height: 147%;
  text-align: center;
  ${media.tabletUp} {
    font-size: 24px;
  }
  ${media.desktopUp} {
    line-height: 167%;
    font-size: 30px;
  }
`

export const Email = styled.a`
  ${media.desktopUp} {
    :hover {
      text-decoration-line: underline;
      text-underline-position: under;
    }
  }
`
