import styled from "styled-components/macro"

import { media } from "styles/media-queries"

export const Text = styled.p`
  font-size: 17px;
  line-height: 171%;
  ${media.tabletUp} {
    font-size: 24px;
  }
  ${media.desktopUp} {
    line-height: 167%;
  }
`

export const Line = styled.span`
  width: 40px;
  margin-bottom: 4px;
  border: 1px solid ${props => props.theme.primary};
  display: inline-block;
  ${media.tabletUp} {
    border-width: 1.5px;
    width: 60px;
    margin-bottom: 6px;
  }
  ${media.desktopUp} {
    border-width: 2px;
    width: 80px;
    margin-bottom: 8px;
  }
`

export const Dot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.theme.primary};
  display: inline-block;
  ${media.tabletUp} {
    height: 15px;
    width: 15px;
  }
  ${media.desktopUp} {
    height: 20px;
    width: 20px;
  }
`
