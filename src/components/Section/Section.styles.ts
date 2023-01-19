import styled from "styled-components/macro"

import { media } from "styles/media-queries"

export const Section = styled.section`
  padding: 40px 0;
  :nth-child(2n) {
    background-color: ${({ theme }) => theme.lightGrey};
  }
  :nth-child(2n + 1) {
    background-color: ${({ theme }) => theme.white};
  }
  ${media.tabletUp} {
    padding: 80px 0;
  }
  ${media.desktopUp} {
    padding: 120px 0;
  }
`

export const InnerContainer = styled.div`
  margin: 0 auto;
  width: 327px;
  ${media.tabletUp} {
    width: 718px;
  }
  ${media.desktopUp} {
    width: 1100px;
  }
`

export const HeadingContainer = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: center;
  ${media.tabletUp} {
    margin-bottom: 60px;
  }
  ${media.desktopUp} {
    margin-bottom: 80px;
  }
`

export const Heading = styled.h2`
  text-align: center;
  text-transform: uppercase;
  padding: 0 4px;
  color: ${({ theme }) => theme.white};
  background-color: ${({ theme }) => theme.primary};
  font-size: 22px;
  line-height: 122%;
  ${media.tabletUp} {
    font-size: 35px;
  }
  ${media.desktopUp} {
    font-size: 48px;
    padding: 2px 16px;
    line-height: 122%;
  }
`

export const ExtraHeading = styled.span`
  display: none;
  ${media.tabletUp} {
    display: inline;
  }
`

export const FeaturedContainer = styled.div`
  font-family: "Roboto", sans-serif;
  ${media.tabletUp} {
    display: flex;
    flex-wrap: wrap;
    -moz-column-gap: 44px;
    column-gap: 44px;
  }
`

export const SubheadingContainer = styled.div`
  text-align: center;
  margin-top: 50px;
  margin-bottom: 20px;
  ${media.tabletUp} {
    margin-top: 65px;
    margin-bottom: 30px;
  }
  ${media.desktopUp} {
    margin-top: 80px;
    margin-bottom: 40px;
  }
`

export const Subheading = styled.h2`
  color: ${({ theme }) => theme.primary};
  font-size: 21px;
  line-height: 119%;
  text-transform: uppercase;
  ${media.tabletUp} {
    font-size: 30px;
  }
  ${media.desktopUp} {
    font-size: 38px;
    line-height: 124%;
  }
`

export const OtherContainer = styled.div`
  font-family: "Roboto", sans-serif;
`
