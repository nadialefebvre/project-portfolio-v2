import styled from "styled-components/macro"

import { media } from "styles/media-queries"

export const Header = styled.header`
  height: 520px;
  background-image: linear-gradient(
      rgba(100, 100, 100, 0.4),
      rgba(100, 100, 100, 0.4)
    ),
    url("./assets/typewriter-mobile.jpg");
  background-position-x: 50%;
  background-position-y: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${props => props.theme.white};
  ${media.tabletUp} {
    height: 594px;
    background-image: linear-gradient(
        rgba(100, 100, 100, 0.4),
        rgba(100, 100, 100, 0.4)
      ),
      url("./assets/typewriter-tablet.jpg");
  }
  ${media.desktopUp} {
    height: 668px;
    background-image: linear-gradient(
        rgba(100, 100, 100, 0.4),
        rgba(100, 100, 100, 0.4)
      ),
      url("./assets/typewriter-desktop.jpg");
  }
`

export const InnerContainer = styled.div`
  position: relative;
  height: 520px;
  width: 327px;
  margin: 0 auto;
  ${media.tabletUp} {
    height: 594px;
    width: 718px;
  }
  ${media.desktopUp} {
    height: 668px;
    width: 1100px;
  }
`

export const Socials = styled.div`
  position: absolute;
  top: 48px;
  right: 0;
  display: flex;
  ${media.tabletUp} {
    top: 75px;
  }
  ${media.desktopUp} {
    top: 102px;
  }
`

export const Link = styled.a`
  font-size: 16px;
  ${media.tabletUp} {
    font-size: 24px;
  }
  ${media.desktopUp} {
    font-size: 32px;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    &:hover {
      transform: scale(1.12);
      color: ${props => props.theme.secondary};
    }
  }
`

export const Circle = styled.div`
  width: 40px;
  height: 40px;
  margin-left: 5px;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.white};
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.tabletUp} {
    width: 60px;
    height: 60px;
    margin-left: 7.5px;
    border: 1.5px solid ${props => props.theme.white};
  }
  ${media.desktopUp} {
    width: 80px;
    height: 80px;
    margin-left: 10px;
    border: 2px solid ${props => props.theme.white};
  }
`

export const TextContainer = styled.div`
  position: absolute;
  top: 146px;
  left: 0;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  ${media.tabletUp} {
    top: 176px;
  }
  ${media.desktopUp} {
    top: 206px;
  }
`

export const PortfolioName = styled.h3`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 138%;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  ${media.tabletUp} {
    font-size: 21px;
  }
  ${media.desktopUp} {
    font-size: 28px;
    line-height: 132%;
  }
`

export const BoldString = styled.span`
  font-weight: 700;
`

export const DevTitle = styled.h1`
  text-transform: lowercase;
  font-size: 40px;
  line-height: 122%;
  ${media.tabletUp} {
    font-size: 61px;
  }
  ${media.desktopUp} {
    font-size: 82px;
  }
`

export const OtherTitle = styled.h2`
  text-transform: lowercase;
  font-size: 24px;
  line-height: 167%;
  ${media.tabletUp} {
    font-size: 37px;
  }
  ${media.desktopUp} {
    font-size: 50px;
    line-height: 156%;
  }
`

export const Image = styled.img`
  position: absolute;
  bottom: -16px;
  right: 0;
  width: 180px;
  border-radius: 50%;
  border: 2px solid ${props => props.theme.white};
  ${media.tabletUp} {
    width: 257px;
    bottom: -28px;
  }
  ${media.desktopUp} {
    width: 333px;
    bottom: -40px;
  }
`
