import styled from "styled-components/macro"

import { media } from "utils/media-queries"

export const Container = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  text-align: center;
  row-gap: 29px;
`

export const Subheading = styled.h3`
  color: ${props => props.theme.primary};
  font-size: 17px;
  text-transform: uppercase;
  line-height: 171%;
  ${media.tabletUp} {
    font-size: 21px;
  }
  ${media.desktopUp} {
    line-height: 164%;
  }
`

export const List = styled.h3`
  list-style-type: none;
  font-size: 17px;
  font-weight: 400;
  letter-spacing: 0.01em;
  line-height: 171%;
  ${media.tabletUp} {
    font-size: 21px;
  }
  ${media.desktopUp} {
    line-height: 164%;
  }
`
