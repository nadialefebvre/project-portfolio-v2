import React from "react"

import { formattedDate } from "utils/formattedDate"
import { StoryInterface } from "components/Thoughts"

import * as Styled from "./OtherThought.styles"

interface Props {
  thought: StoryInterface
}

const OtherThought = ({ thought }: Props) => (
  <Styled.Article>
    <a
      href={thought.link}
      aria-label="Go to story on Medium"
      target="_blank"
      rel="noopener noreferrer"
      title={`${thought.title} - story`}
    >
      <Styled.Title>
        <Styled.DateString>
          {`${formattedDate(thought.pubDate)}.`}
        </Styled.DateString>
        {` ${thought.title} `}
        <Styled.Arrows aria-hidden="true">&gt;&gt;</Styled.Arrows>
      </Styled.Title>
    </a>
  </Styled.Article>
)

export default OtherThought
