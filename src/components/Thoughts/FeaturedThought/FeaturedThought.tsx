import React from "react"

import { Tags } from "components"
import { StoryInterface } from "components/Thoughts"
import { fixSingleThoughtTopic } from "utils/fixSingleThoughtTopic"
import { formattedDate } from "utils/formattedDate"

import * as Styled from "./FeaturedThought.styles"

interface Props {
  thought: StoryInterface
}

const FeaturedThought: React.FC<Props> = ({ thought }) => {
  const { description, link, title, thumbnail, pubDate, categories } = thought

  const startIndex = description.indexOf("<p>") + 3
  const croppedDescription = `${description.slice(
    startIndex,
    startIndex + 250
  )}...`

  const hasThumbnail = thumbnail !== "" && thumbnail !== null

  return (
    <Styled.Article>
      <a
        href={link}
        aria-label="Go to story on Medium"
        target="_blank"
        rel="noopener noreferrer"
        title={`${title} - story`}
      >
        {hasThumbnail && (
          <Styled.ImageContainer>
            <Styled.Image src={thumbnail} alt={title} />
          </Styled.ImageContainer>
        )}
        <div>
          <Styled.DateString>{formattedDate(pubDate)}</Styled.DateString>
          <Styled.Title>{title}</Styled.Title>
          <Styled.Text>
            {`${croppedDescription} `}
            <Styled.Arrows aria-hidden="true">&gt;&gt;</Styled.Arrows>
          </Styled.Text>
        </div>
        <Tags list={categories} fixTopic={fixSingleThoughtTopic} isItalic />
      </a>
    </Styled.Article>
  )
}

export default FeaturedThought
