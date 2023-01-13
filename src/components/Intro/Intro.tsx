import React from "react"

import data from "mapping-data/user.json"

import { Section } from "components/Section"

import * as Styled from "./Intro.styles"

const Intro = () => (
  <Section>
    <Styled.Text>
      <Styled.Line />
      <Styled.Dot />
      <span>{` ${data.infos.introText}`}</span>
    </Styled.Text>
  </Section>
)

export default Intro
