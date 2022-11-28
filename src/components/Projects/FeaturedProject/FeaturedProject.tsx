import React from "react"

import { Tags } from "components/Tags"

import { devTopics, sortTopics, fixProjectTopic } from "utils/topics-things"

import { Repo } from "../Projects.types"

import * as Styled from "./FeaturedProject.styles"

interface Props {
  project: Repo
}

const FeaturedProject = ({ project }: Props) => {
  const projectName = project.name.replace("project-", "").replaceAll("-", " ")
  const imageSrcURL = `https://raw.githubusercontent.com/nadialefebvre/${project.name}/${project.defaultBranchRef.name}/screenshot.jpg`
  const imageAltText = `${project.name.replaceAll("-", " ")}'s screenshot`

  const topics = project.repositoryTopics.nodes.map((topic) => topic.topic.name)

  const projectType = () => {
    if (topics.includes("fullstack")) {
      return "Fullstack web app."
    } else if (topics.includes("mobile")) {
      return "Mobile app."
    } else if (topics.includes("backend")) {
      return "RESTful API."
    } else {
      return "Frontend web app."
    }
  }

  const topicsList = () => {
    const topicsToKeep = topics.filter((topic) => !devTopics.includes(topic))
    return sortTopics(topicsToKeep)
  }

  return (
    <Styled.Article>
      <a
        href={project.homepageUrl}
        aria-label={`Go to deployed project - ${projectName}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Styled.ImageContainer>
          <Styled.Image src={imageSrcURL} alt={imageAltText} />
          <Styled.ImageOverlay title={`Project ${projectName}`}>
            <h3>{projectName}</h3>
          </Styled.ImageOverlay>
        </Styled.ImageContainer>
      </a>
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        <Styled.Title>{projectType()}</Styled.Title>
        <Styled.Description>{project.description}</Styled.Description>
        <Tags list={topicsList()} fixTopic={fixProjectTopic} />
      </a>
    </Styled.Article>
  )
}

export default FeaturedProject
