import React from "react"

import { formattedDate } from "utils/formattedDate"
import { StoryInterface } from "components/Thoughts"

import * as Styled from "./OtherThought.styles"

interface Props {
  thought: StoryInterface
}

const OtherThought: React.FC<Props> = ({ thought }) => {
  const { link, title, pubDate } = thought

  return (
    <Styled.Article>
      <a
        href={link}
        aria-label="Go to story on Medium"
        target="_blank"
        rel="noopener noreferrer"
        title={`${title} - story`}
      >
        <Styled.Title>
          <Styled.DateString>{`${formattedDate(pubDate)}.`}</Styled.DateString>
          {` ${title} `}
          <Styled.Arrows aria-hidden="true">&gt;&gt;</Styled.Arrows>
        </Styled.Title>
      </a>
    </Styled.Article>
  )
}

export default OtherThought
