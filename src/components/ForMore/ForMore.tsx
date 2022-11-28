import React from "react"

import { setIcon } from "utils/socials-icons"

import data from "data/user.json"

import { Section } from "components/Section"

import * as Styled from "./ForMore.styles"

const ForMore = () => (
  <Section title="For more">
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
          <Styled.IconContainer>
            <Styled.Circle>{setIcon(item.name)}</Styled.Circle>
            <Styled.IconHeading>{item.name}</Styled.IconHeading>
          </Styled.IconContainer>
        </Styled.Link>
      ))}
    </Styled.Socials>
  </Section>
)

export default ForMore
