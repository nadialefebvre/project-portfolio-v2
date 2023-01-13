import styled from "styled-components/macro"

import { media } from "styles/media-queries"

export const Socials = styled.div`
  display: flex;
  justify-content: center;
`

export const Link = styled.a`
  color: ${props => props.theme.primary};
  font-size: 24px;
  ${media.tabletUp} {
    font-size: 42px;
  }
  ${media.desktopUp} {
    font-size: 60px;
  }
`

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 12px;
  width: 60px;
  ${media.tabletUp} {
    width: 140px;
  }
  ${media.desktopUp} {
    width: 200px;
  }
`

export const Circle = styled.div`
  width: 60px;
  height: 60px;
  margin-bottom: 16px;
  border: 2px solid ${props => props.theme.primary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.tabletUp} {
    border: 3px solid ${props => props.theme.primary};
    width: 110px;
    height: 110px;
  }
  ${media.desktopUp} {
    border: 4px solid ${props => props.theme.primary};
    width: 160px;
    height: 160px;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      transform: scale(1.12);
      color: ${props => props.theme.secondary};
    }
  }
`

export const IconHeading = styled.h3`
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.01em;
  font-size: 11px;
  line-height: 118%;
  text-align: center;
  text-transform: uppercase;
  ${media.tabletUp} {
    font-size: 18px;
  }
  ${media.desktopUp} {
    font-size: 25px;
    line-height: 164%;
  }
`
