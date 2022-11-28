import React from "react"

import { setIcon } from "utils/socials-icons"

import data from "data/user.json"

import * as Styled from "./Header.styles"

const Header = () => (
  <Styled.Header>
    <Styled.InnerContainer>
      <Styled.Socials>
        {data.socials.map((item) => (
          <Styled.Link
            key={item.name}
            aria-label={`Go to profile on ${item.name}`}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            title={`${item.name} ${data.infos.name}`}
          >
            <Styled.Circle>{setIcon(item.name)}</Styled.Circle>
          </Styled.Link>
        ))}
      </Styled.Socials>

      <Styled.TextContainer>
        <Styled.PortfolioName>
          Portfolio:
          <Styled.BoldString> {data.infos.name}</Styled.BoldString>
        </Styled.PortfolioName>
        <Styled.DevTitle>{data.infos.devTitle}</Styled.DevTitle>
        {data.infos.otherTitle !== "" && (
          <Styled.OtherTitle>+ {data.infos.otherTitle}</Styled.OtherTitle>
        )}
      </Styled.TextContainer>

      <Styled.Image
        src={data.infos.imageUrl}
        alt={data.infos.name}
        title={`${data.infos.name}, ${data.infos.devTitle}`}
      />
    </Styled.InnerContainer>
  </Styled.Header>
)

export default Header
