import React from "react"

import { Section } from "components/Section"
import data from "mapping-data/skills.json"

import * as Styled from "./Skills.styles"

const Skills = () => (
  <Section title="Skills">
    <Styled.Container>
      {data.categories.map((item) =>
        item.skills.length ? (
          <div key={item.title}>
            <Styled.Subheading>{item.title}</Styled.Subheading>
            <Styled.List>
              {item.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </Styled.List>
          </div>
        ) : null
      )}
    </Styled.Container>
  </Section>
)

export default Skills
