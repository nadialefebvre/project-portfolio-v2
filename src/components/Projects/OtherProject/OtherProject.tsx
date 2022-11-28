import React from "react"

import { Tags } from "components/Tags"

import { devTopics, sortTopics, fixProjectTopic } from "utils/topics-things"

import { Repo } from "../Projects.types"

import * as Styled from "./OtherProject.styles"

interface Props {
  project: Repo
}

const OtherProject = ({ project }: Props) => {
  const projectName = project.name.replace("project-", "").replaceAll("-", " ")

  const topicsList = () => {
    const topics = project.repositoryTopics.nodes.map(
      (topic) => topic.topic.name
    )
    const topicsToKeep = topics.filter(
      (topic) =>
        topic === topics.find((element) => devTopics.includes(element)) ||
        !devTopics.includes(topic)
    )
    return sortTopics(topicsToKeep)
  }

  return (
    <Styled.Article>
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        <Styled.TextContainer>
          <Styled.Title>{projectName}.</Styled.Title>
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
