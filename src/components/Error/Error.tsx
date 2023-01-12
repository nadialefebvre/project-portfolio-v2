import React from "react"

import * as Styled from "./Error.styles"

interface Props {
  item: string
  error: string
}

const Error = ({ item, error }: Props) => (
  <div>
    <Styled.IconBox>
      <Styled.Icon />
    </Styled.IconBox>
    <Styled.Text>
      {`There's an issue with the API fetching the ${item}:`}
    </Styled.Text>
    <Styled.Error>{`Error: ${error}`}</Styled.Error>
    <Styled.Text>Please refresh the page, or try later.</Styled.Text>
  </div>
)

export default Error
