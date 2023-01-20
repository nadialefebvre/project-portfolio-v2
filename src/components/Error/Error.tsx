import { Section } from "components/Section"
import React from "react"

import * as Styled from "./Error.styles"

interface Props {
  title: string
  extraTitle?: string
  text: string
  error: string
}

const Error: React.FC<Props> = ({ title, extraTitle, text, error }) => {
  console.error(
    "%cERROR =>",
    "color: red; font-weight: bold; text-decoration: underline;",
    error
  )

  return (
    <Section title={title} extraTitle={extraTitle}>
      <Styled.IconBox>
        <Styled.Icon />
      </Styled.IconBox>
      <Styled.Text>{text}</Styled.Text>
      <Styled.Error>{`Error: ${error}`}</Styled.Error>
      <Styled.Text>Please refresh the page, or try later.</Styled.Text>
      <Styled.Text>
        If the error remains, please{" "}
        <a href="mailto:nadialefebvre.dev@hotmail.com?subject=Issue with your portfolio">
          contact the developer
        </a>
        .
      </Styled.Text>
    </Section>
  )
}

export default Error
