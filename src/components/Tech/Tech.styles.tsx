import styled from "styled-components/macro"

import { media } from "styles/media-queries"

export const Text = styled.p`
  font-size: 17px;
  line-height: 171%;
  text-align: center;
  ${media.tabletUp} {
    font-size: 24px;
  }
  ${media.desktopUp} {
    line-height: 167%;
    letter-spacing: 0.01em;
  }
`

export const ColoredString = styled.span`
  color: ${props => props.theme.primary};
  font-weight: 500;
  &:not(:last-child):after {
    content: ", ";
  }
  &:last-child:after {
    content: ".";
  }
`

export const RegularString = styled.span`
  &:not(:last-child):after {
    content: ", ";
  }
  &:last-child:after {
    content: ".";
  }
`
