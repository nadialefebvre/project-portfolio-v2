import React from "react"

import { Tags } from "components/Tags"
import {
  topicsListFeatured,
  fixProjectTopic,
  projectType,
} from "utils/project-topics"
import { shortName, longNameInTitleCase } from "utils/project-name"
import data from "mapping-data/user.json"
import { RepoInterface } from "components/Projects"

import * as Styled from "./FeaturedProject.styles"

interface Props {
  project: RepoInterface
}

const FeaturedProject = ({ project }: Props) => {
  const { name, homepageUrl, defaultBranchRef, url, description } = project

  const username = data.infos.usernameGitHub
  const defaultBranch = defaultBranchRef?.name
  const projectImageSrc = `https://raw.githubusercontent.com/${username}/${name}/${defaultBranch}/screenshot.jpg`

  return (
    <Styled.Article>
      <a
        href={homepageUrl}
        aria-label={`Go to deployed project - ${shortName(name)}`}
        target="_blank"
        rel="noopener noreferrer"
        title={`${longNameInTitleCase(name)} - website`}
      >
        <Styled.ImageContainer>
          <Styled.Image src={projectImageSrc} alt={longNameInTitleCase(name)} />
          <Styled.ImageOverlay>
            <h3>{shortName(name)}</h3>
          </Styled.ImageOverlay>
        </Styled.ImageContainer>
      </a>
      <a
        href={url}
        aria-label={`Go to project repository - ${shortName(name)}`}
        target="_blank"
        rel="noopener noreferrer"
        title={`${longNameInTitleCase(name)} - repository`}
      >
        <Styled.Title>{`${projectType(project)}.`}</Styled.Title>
        <Styled.Description>{description}</Styled.Description>
        <Tags list={topicsListFeatured(project)} fixTopic={fixProjectTopic} />
      </a>
    </Styled.Article>
  )
}

export default FeaturedProject
