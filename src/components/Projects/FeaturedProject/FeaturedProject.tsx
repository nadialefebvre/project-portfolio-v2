import React from "react"

import { Tags } from "components/Tags"
import {
  topicsListFeatured,
  fixProjectTopic,
  projectType,
} from "utils/project-topics"
import { shortName, longNameInTitleCase } from "utils/project-name"
import data from "mapping-data/user.json"
import { Repo } from "../Projects.types"

import * as Styled from "./FeaturedProject.styles"

interface Props {
  project: Repo
}

const FeaturedProject = ({ project }: Props) => {
  const username = data.infos.usernameGitHub
  const projectName = project.name
  const defaultBranch = project.defaultBranchRef?.name
  const projectImageSrc = `https://raw.githubusercontent.com/${username}/${projectName}/${defaultBranch}/screenshot.jpg`

  return (
    <Styled.Article>
      <a
        href={project.homepageUrl}
        aria-label={`Go to deployed project - ${shortName(project.name)}`}
        target="_blank"
        rel="noopener noreferrer"
        title={`${longNameInTitleCase(project.name)} - website`}
      >
        <Styled.ImageContainer>
          <Styled.Image
            src={projectImageSrc}
            alt={longNameInTitleCase(project.name)}
          />
          <Styled.ImageOverlay>
            <h3>{shortName(project.name)}</h3>
          </Styled.ImageOverlay>
        </Styled.ImageContainer>
      </a>
      <a
        href={project.url}
        aria-label={`Go to project repository - ${shortName(project.name)}`}
        target="_blank"
        rel="noopener noreferrer"
        title={`${longNameInTitleCase(project.name)} - repository`}
      >
        <Styled.Title>{`${projectType(project)}.`}</Styled.Title>
        <Styled.Description>{project.description}</Styled.Description>
        <Tags list={topicsListFeatured(project)} fixTopic={fixProjectTopic} />
      </a>
    </Styled.Article>
  )
}

export default FeaturedProject
