import React from "react"

import * as Styled from "./Tags.styles"

interface Props {
  list: string[]
  fixTopic: (item: string) => string | undefined
  isItalic?: boolean
}

const Tags: React.FC<Props> = ({ list, fixTopic, isItalic }) => (
  <Styled.TagsContainer>
    {list.map((item) => (
      <Styled.Tag key={item} isItalic={isItalic !== undefined && isItalic} data-testid="topic">
        {isItalic && "#"}
        {fixTopic(item)}
      </Styled.Tag>
    ))}
  </Styled.TagsContainer>
)

export default Tags
