import React from "react"

import { Tags } from "components/Tags"
import { fixTopic } from "utils/fixTopic"
import { formattedDate } from "utils/formattedDate"
import { StoryInterface } from "components/Thoughts"

import * as Styled from "./FeaturedThought.styles"

interface Props {
  thought: StoryInterface
}

const FeaturedThought = ({ thought }: Props) => {
  const startIndex = thought.description.indexOf("<p>") + 3
  const croppedDescription = `${thought.description.slice(
    startIndex,
    startIndex + 250
  )}...`

  return (
    <Styled.Article>
      <a
        href={thought.link}
        aria-label="Go to story on Medium"
        target="_blank"
        rel="noopener noreferrer"
        title={`${thought.title} - story`}
      >
        <Styled.ImageContainer>
          <Styled.Image src={thought.thumbnail} alt={thought.title} />
        </Styled.ImageContainer>
        <div>
          <Styled.DateString>
            {formattedDate(thought.pubDate)}
          </Styled.DateString>
          <Styled.Title>{thought.title}</Styled.Title>
          <Styled.Text>
            {`${croppedDescription} `}
            <Styled.Arrows aria-hidden="true">&gt;&gt;</Styled.Arrows>
          </Styled.Text>
        </div>
        <Tags list={thought.categories} fixTopic={fixTopic} isItalic />
      </a>
    </Styled.Article>
  )
}

export default FeaturedThought
