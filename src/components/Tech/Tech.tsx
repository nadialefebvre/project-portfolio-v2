import React from "react"

import data from "data/tech.json"

import * as Styled from "./Tech.styles"

import { Section } from "components/Section"

const Tech = () => (
  <Section title="Tech">
    <Styled.Text>
      {data.tech.map((item) =>
        item.isHighlighted ? (
          <Styled.ColoredString key={item.name}>
            {item.name}
          </Styled.ColoredString>
        ) : (
          <Styled.RegularString key={item.name}>
            {item.name}
          </Styled.RegularString>
        )
      )}
    </Styled.Text>
  </Section>
)

export default Tech
