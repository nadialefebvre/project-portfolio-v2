import React from "react"

import { Tags } from "components/Tags"

import {
  setTopics,
  devTopics,
  sortTopics,
  fixProjectTopic,
} from "utils/topics-things"

import { fixProjectName } from "utils/project-things"

import { Repo } from "../Projects.types"

import * as Styled from "./OtherProject.styles"

interface Props {
  project: Repo
}

const OtherProject = ({ project }: Props) => {
  const topicsList = () => {
    const topicsToKeep = setTopics(project).filter(
      (topic) =>
        topic ===
          setTopics(project).find((element) => devTopics.includes(element)) ||
        !devTopics.includes(topic)
    )
    return sortTopics(topicsToKeep)
  }

  return (
    <Styled.Article>
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        <Styled.TextContainer>
          <Styled.Title>{fixProjectName(project)}.</Styled.Title>
          <Styled.Description>
            {project.description}{" "}
            <Styled.Arrows aria-hidden="true">&gt;&gt;</Styled.Arrows>
          </Styled.Description>
        </Styled.TextContainer>
        <Tags list={topicsList()} fixTopic={fixProjectTopic} />
      </a>
    </Styled.Article>
  )
}

export default OtherProject
