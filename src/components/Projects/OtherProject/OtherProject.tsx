import React from "react"

import { Tags } from "components/Tags"
import { topicsListOther, fixProjectTopic } from "utils/project-topics"
import { shortName, longNameInTitleCase } from "utils/project-name"
import { RepoInterface } from "components/Projects"

import * as Styled from "./OtherProject.styles"

interface Props {
  project: RepoInterface
}

const OtherProject: React.FC<Props> = ({ project }) => {
  const { name, url, description } = project

  return (
    <Styled.Article>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        title={`${longNameInTitleCase(name)} - repository`}
      >
        <Styled.TextContainer>
          <Styled.Title>{`${shortName(name)}.`}</Styled.Title>
          <Styled.Description>
            {description}{" "}
            <Styled.Arrows aria-hidden="true">&gt;&gt;</Styled.Arrows>
          </Styled.Description>
        </Styled.TextContainer>
        <Tags list={topicsListOther(project)} fixTopic={fixProjectTopic} />
      </a>
    </Styled.Article>
  )
}

export default OtherProject
