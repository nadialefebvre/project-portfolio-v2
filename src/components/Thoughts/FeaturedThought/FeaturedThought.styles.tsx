import styled from "styled-components/macro"

import { media } from "styles/media-queries"

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
    transition: 0.3s ease;
    &:hover {
      outline: 3px solid ${props => props.theme.secondary};
    }
  }
`

export const Image = styled.img`
  width: 100%;
  display: inherit;
  height: 191px;
  object-fit: cover;
  ${media.desktopUp} {
    width: 100%;
    height: 306px;
  }
`

export const DateString = styled.p`
  text-transform: uppercase;
  font-size: 17px;
  line-height: 176%;
  margin-top: 32px;
  color: ${props => props.theme.primary};
  ${media.tabletUp} {
    font-size: 21px;
  }
  ${media.desktopUp} {
    line-height: 164%;
    margin-top: 60px;
  }
`

export const Title = styled.h3`
  font-size: 21px;
  line-height: 143%;
  ${media.tabletUp} {
    font-size: 26px;
  }
  ${media.desktopUp} {
    line-height: 137%;
    &:hover {
      text-decoration-line: underline;
      text-underline-position: under;
    }
  }
`

export const Text = styled.p`
  font-size: 17px;
  line-height: 188%;
  ${media.tabletUp} {
    font-size: 21px;
  }
  ${media.desktopUp} {
    line-height: 164%;
  }
`

export const Arrows = styled.span`
  color: ${props => props.theme.primary};
`
