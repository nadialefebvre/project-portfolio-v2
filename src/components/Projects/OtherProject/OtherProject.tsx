import React from "react"

import { Tags } from "components"
import { RepoInterface } from "components/Projects"
import { longNameInTitleCase, shortName } from "utils/project-name"
import {
  fixSingleProjectTopic,
  setOtherProjectTopicsList,
} from "utils/project-topics"

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
        <Tags
          list={setOtherProjectTopicsList(project)}
          fixTopic={fixSingleProjectTopic}
        />
      </a>
    </Styled.Article>
  )
}

export default OtherProject
