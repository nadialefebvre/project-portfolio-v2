import React from "react"

import { Tags } from "components/Tags"

import { topicsListOther, fixProjectTopic } from "utils/project-topics"

import { shortName, longNameInTitleCase } from "utils/project-name"

import { Repo } from "../Projects.types"

import * as Styled from "./OtherProject.styles"

interface Props {
  project: Repo
}

const OtherProject = ({ project }: Props) => (
  <Styled.Article>
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      title={`${longNameInTitleCase(project.name)} - repository`}
    >
      <Styled.TextContainer>
        <Styled.Title>{`${shortName(project.name)}.`}</Styled.Title>
        <Styled.Description>
          {project.description}{" "}
          <Styled.Arrows aria-hidden="true">&gt;&gt;</Styled.Arrows>
        </Styled.Description>
      </Styled.TextContainer>
      <Tags list={topicsListOther(project)} fixTopic={fixProjectTopic} />
    </a>
  </Styled.Article>
)

export default OtherProject
