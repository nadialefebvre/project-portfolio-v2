import styled, { css } from "styled-components/macro"

import { media } from "styles/media-queries"

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 14px;
`

export const Tag = styled.span<{ isItalic: boolean }>`
  font-size: 9px;
  line-height: 122%;
  text-align: center;
  letter-spacing: 0.01em;
  background-color: ${({ theme }) => theme.lightPrimary};
  padding: 5px;
  margin-right: 6px;
  margin-bottom: 6px;
  ${(props) =>
    props.isItalic &&
    css`
      font-style: italic;
    `}
  ${media.tabletUp} {
    font-size: 13px;
  }
  ${media.desktopUp} {
    line-height: 131%;
  }
`
