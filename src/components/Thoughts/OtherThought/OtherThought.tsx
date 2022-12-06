import React from "react"

import { Story } from "../Thoughts.types"

import * as Styled from "./OtherThought.styles"

import { formattedDateFunction } from "utils/date"

interface Props {
  thought: Story
}

const OtherThought = ({ thought }: Props) => (
  <Styled.Article>
    <a
      href={thought.link}
      aria-label="Go to story on Medium"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Styled.Title>
        <Styled.DateString>
          {`${formattedDateFunction(thought.pubDate)}.`}
        </Styled.DateString>
        {` ${thought.title} `}
        <Styled.Arrows aria-hidden="true">&gt;&gt;</Styled.Arrows>
      </Styled.Title>
    </a>
  </Styled.Article>
)

export default OtherThought
