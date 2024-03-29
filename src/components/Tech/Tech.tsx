import React from "react"

import { Section } from "components"
import data from "mapping-data/tech.json"

import * as Styled from "./Tech.styles"

const Tech: React.FC = () => (
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
