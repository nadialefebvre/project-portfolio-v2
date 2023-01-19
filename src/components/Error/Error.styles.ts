import styled from "styled-components/macro"
import { MdErrorOutline } from "react-icons/md"

import { media } from "styles/media-queries"

export const IconBox = styled.div`
  display: flex;
  justify-content: center;
`

export const Icon = styled(MdErrorOutline)`
  color: ${({ theme }) => theme.secondary};
  width: 40px;
  height: 40px;
  ${media.tabletUp} {
    width: 60px;
    height: 60px;
  }
  ${media.desktopUp} {
    width: 80px;
    height: 80px;
  }
`

export const Text = styled.p`
  font-size: 17px;
  line-height: 171%;
  text-align: center;
  ${media.tabletUp} {
    font-size: 24px;
  }
  ${media.desktopUp} {
    line-height: 167%;
  }
`

export const Error = styled.p`
  font-family: "Courier New", Courier, monospace;
  font-size: 17px;
  line-height: 171%;
  text-align: center;
  ${media.tabletUp} {
    font-size: 24px;
  }
  ${media.desktopUp} {
    line-height: 167%;
  }
`
