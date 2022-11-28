import React from "react"

import { Tags } from "components/Tags"

import { fixThoughtTopic } from "utils/topics-things"

import { Article } from "../Thoughts.types"

import * as Styled from "./FeaturedThought.styles"

import { formattedDateFunction } from "utils/date"

interface Props {
  thought: Article
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
        aria-label="Go to article on Medium"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Styled.ImageContainer>
          <Styled.Image
            src={thought.thumbnail}
            alt={thought.title}
            title={thought.title}
          />
        </Styled.ImageContainer>
        <div>
          <Styled.DateString>
            {formattedDateFunction(thought.pubDate)}
          </Styled.DateString>
          <Styled.Title>{thought.title}</Styled.Title>
          <Styled.Text>
            {`${croppedDescription} `}
            <Styled.Arrows aria-hidden="true">&gt;&gt;</Styled.Arrows>
          </Styled.Text>
        </div>
        <Tags list={thought.categories} fixTopic={fixThoughtTopic} isItalic />
      </a>
    </Styled.Article>
  )
}

export default FeaturedThought
