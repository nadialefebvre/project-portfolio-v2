import React from "react"

import data from "mapping-data/user.json"

import * as Styled from "./Footer.styles"

const Footer = () => (
  <Styled.Footer>
    <Styled.Heading>Contact</Styled.Heading>
    <Styled.TextContainer>
      <p>{data.infos.name}</p>
      <Styled.Email href={`mailto:${data.infos.email}`}>
        {data.infos.email}
      </Styled.Email>
    </Styled.TextContainer>
  </Styled.Footer>
)

export default Footer
