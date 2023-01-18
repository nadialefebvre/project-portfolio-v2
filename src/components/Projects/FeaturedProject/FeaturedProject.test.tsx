import React from "react"

import { render, screen } from "@testing-library/react"

import FeaturedProject from "./FeaturedProject"
import { longNameInTitleCase } from "utils/project-name"
import data from "mapping-data/user.json"
import { RepoInterface } from "components/Projects"

const project: RepoInterface = {
  id: "123",
  name: "mocked-project",
  defaultBranchRef: {
    name: "master",
  },
  homepageUrl: "https://mocked-project.com",
  url: `https://github.com/${data.infos.usernameGitHub}/mocked-project`,
  description: "This is a mocked project",
  repositoryTopics: {
    nodes: [
      {
        topic: {
          name: "topic1",
        },
      },
      {
        topic: {
          name: "topic2",
        },
      },
    ],
  },
}

describe("FeaturedProject component", () => {
  test("should render the project image, title, description and tags", () => {
    render(<FeaturedProject project={project} />)
    const image = screen.getByAltText(longNameInTitleCase(project.name))
    const title = screen.getByText(/frontend web app/i)
    const description = screen.getByText(project.description)
    const tags = screen.getAllByText(/topic/i)
    expect(image).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(tags.length).toBe(2)
  })

  test("should render the correct project image source", () => {
    render(<FeaturedProject project={project} />)
    const image: HTMLImageElement = screen.getByRole("img")
    const username = data.infos.usernameGitHub
    const projectName = project.name
    const defaultBranch = project.defaultBranchRef?.name
    expect(image.src).toBe(
      `https://raw.githubusercontent.com/${username}/${projectName}/${defaultBranch}/screenshot.jpg`
    )
    expect(image.alt).toBe(longNameInTitleCase(project.name))
  })
})
