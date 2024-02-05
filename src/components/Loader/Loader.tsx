import React from "react"

import animation from "animations/animated-dots.json"
import { Section } from "components"

import * as Styled from "./Loader.styles"

interface Props {
  title: string
  extraTitle?: string
}

const Loader: React.FC<Props> = ({ title, extraTitle }) => (
  <Section title={title} extraTitle={extraTitle}>
    <Styled.Animation
      data-testid="animation"
      animationData={animation}
      loop={true}
    />
  </Section>
)

export default Loader
