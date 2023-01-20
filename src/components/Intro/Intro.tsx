import React from "react"

import { Section } from "components"
import data from "mapping-data/user.json"

import * as Styled from "./Intro.styles"

const Intro: React.FC = () => (
  <Section>
    <Styled.Text>
      <Styled.Line />
      <Styled.Dot />
      <span>{` ${data.infos.introText}`}</span>
    </Styled.Text>
  </Section>
)

export default Intro
