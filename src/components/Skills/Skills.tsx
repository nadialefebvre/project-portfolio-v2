import React from "react"

import data from "mapping-data/skills.json"

import * as Styled from "./Skills.styles"

import { Section } from "components/Section"

const Skills = () => (
  <Section title="Skills">
    <Styled.Container>
      {data.categories.map((item) => (
        <div key={item.title}>
          <Styled.Subheading>{item.title}</Styled.Subheading>
          <Styled.List>
            {item.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </Styled.List>
        </div>
      ))}
    </Styled.Container>
  </Section>
)

export default Skills
