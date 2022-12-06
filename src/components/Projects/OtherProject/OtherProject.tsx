import React from "react"

import { Tags } from "components/Tags"

import { topicsListOther, fixProjectTopic } from "utils/topics-things"

import { shortProjectName } from "utils/project-things"

import { Repo } from "../Projects.types"

import * as Styled from "./OtherProject.styles"

interface Props {
  project: Repo
}

const OtherProject = ({ project }: Props) => (
  <Styled.Article>
    <a href={project.url} target="_blank" rel="noopener noreferrer">
      <Styled.TextContainer>
        <Styled.Title>{`${shortProjectName(project.name)}.`}</Styled.Title>
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
