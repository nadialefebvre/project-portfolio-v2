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

import data from "data/user.json"

import * as Styled from "./FeaturedProject.styles"

interface Props {
  project: Repo
}

const FeaturedProject = ({ project }: Props) => {
  const imageSrcURL = `https://raw.githubusercontent.com/${data.infos.usernameGitHub}/${project.name}/${project.defaultBranchRef.name}/screenshot.jpg`
  const imageAltText = `${project.name.replaceAll("-", " ")}'s screenshot`

  const projectType = () => {
    if (setTopics(project).includes("fullstack")) {
      return "Fullstack web app."
    } else if (setTopics(project).includes("mobile")) {
      return "Mobile app."
    } else if (setTopics(project).includes("backend")) {
      return "RESTful API."
    } else {
      return "Frontend web app."
    }
  }

  const topicsList = () => {
    const topicsToKeep = setTopics(project).filter(
      (topic) => !devTopics.includes(topic)
    )
    return sortTopics(topicsToKeep)
  }

  return (
    <Styled.Article>
      <a
        href={project.homepageUrl}
        aria-label={`Go to deployed project - ${fixProjectName(project)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Styled.ImageContainer>
          <Styled.Image src={imageSrcURL} alt={imageAltText} />
          <Styled.ImageOverlay title={`Project ${fixProjectName(project)}`}>
            <h3>{fixProjectName(project)}</h3>
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
