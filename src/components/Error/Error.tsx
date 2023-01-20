import React from "react"

import { Section } from "components"
import data from "mapping-data/user.json"

import * as Styled from "./Error.styles"

interface Props {
  title: string
  extraTitle?: string
  text: string
  error: string
}

const Error: React.FC<Props> = ({ title, extraTitle, text, error }) => {
  console.error(
    `%cERROR => ${error}`,
    "color: red; font-weight: bold; text-decoration: underline; font-size: 12px;"
  )

  return (
    <Section title={title} extraTitle={extraTitle}>
      <Styled.IconBox>
        <Styled.Icon />
      </Styled.IconBox>
      <Styled.Text>{text}</Styled.Text>
      <Styled.Error>{`ERROR: ${error}`}</Styled.Error>
      <Styled.Text>Please refresh the page, or try later.</Styled.Text>
      <Styled.Text>
        If the error remains, please{" "}
        <Styled.MailtoLink
          href={`mailto:${data.infos.email}?subject=Issue with your portfolio`}
        >
          contact the developer
        </Styled.MailtoLink>
        .
      </Styled.Text>
    </Section>
  )
}

export default Error
