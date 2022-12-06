import React from "react"

import { Tags } from "components/Tags"

import { topicsListFeatured, fixProjectTopic } from "utils/topics-things"

import {
  shortProjectName,
  longProjectNameTitleCase,
  projectType,
} from "utils/project-things"

import data from "data/user.json"

import { Repo } from "../Projects.types"

import * as Styled from "./FeaturedProject.styles"

interface Props {
  project: Repo
}

const FeaturedProject = ({ project }: Props) => {
  const projectImageSrc = () => {
    const username = data.infos.usernameGitHub
    const projectName = project.name
    const defaultBranch = project.defaultBranchRef.name
    return `https://raw.githubusercontent.com/${username}/${projectName}/${defaultBranch}/screenshot.jpg`
  }

  // const projectImageSrc = `https://raw.githubusercontent.com/${data.infos.usernameGitHub}/${project.name}/${project.defaultBranchRef.name}/screenshot.jpg`

  return (
    <Styled.Article>
      <a
        href={project.homepageUrl}
        aria-label={`Go to deployed project - ${shortProjectName(
          project.name
        )}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Styled.ImageContainer>
          <Styled.Image
            src={projectImageSrc()}
            alt={longProjectNameTitleCase(project.name)}
          />
          <Styled.ImageOverlay title={longProjectNameTitleCase(project.name)}>
            <h3>{shortProjectName(project.name)}</h3>
          </Styled.ImageOverlay>
        </Styled.ImageContainer>
      </a>
      <a
        href={project.url}
        aria-label={`Go to project repository - ${shortProjectName(
          project.name
        )}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Styled.Title>{`${projectType(project)}.`}</Styled.Title>
        <Styled.Description>{project.description}</Styled.Description>
        <Tags list={topicsListFeatured(project)} fixTopic={fixProjectTopic} />
      </a>
    </Styled.Article>
  )
}

export default FeaturedProject
