import styled from "styled-components/macro"

import { media } from "utils/media-queries"

export const Article = styled.article`
  width: 327px;
  ${media.desktopUp} {
    width: 523px;
  }
`

export const ImageContainer = styled.div`
  position: relative;
  margin-top: 32px;
  ${media.desktopUp} {
    margin-top: 54px;
  }
`

export const Image = styled.img`
  width: 100%;
  display: inherit;
  ${media.desktopUp} {
    width: 100%;
  }
`

export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(100, 100, 100, 0.4);
  font-family: "Montserrat", sans-serif;
  color: ${props => props.theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
  font-size: 28px;
  ${media.desktopUp} {
    transition: 0.3s ease;
    &:hover {
      background-color: transparent;
      color: transparent;
      outline: 3px solid ${props => props.theme.secondary};
    }
  }
`

export const Title = styled.h3`
  text-transform: uppercase;
  color: ${props => props.theme.primary};
  letter-spacing: 0.01em;
  font-size: 17px;
  line-height: 171%;
  margin-top: 32px;
  ${media.tabletUp} {
    font-size: 21px;
  }
  ${media.desktopUp} {
    margin-top: 45px;
    line-height: 164%;
    &:hover {
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
  }
`
