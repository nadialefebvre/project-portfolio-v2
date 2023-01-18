import React from "react"

import { render, screen } from "@testing-library/react"

import FeaturedProject from "./FeaturedProject"
import { RepoInterface } from "components/Projects"
import { longNameInTitleCase } from "utils/project-name"
import data from "mapping-data/user.json"

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

describe("<FeaturedProject />", () => {
  test("should render the project image, title, description and tags", () => {
    render(<FeaturedProject project={project} />)
    const image = screen.getByAltText(/mocked project/i)
    const title = screen.getByText(/frontend web app/i)
    const description = screen.getByText(/This is a mocked project/i)
    const tags = screen.getAllByText(/topic/i)
    expect(image).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(tags.length).toBe(2)
  })

  test("should render the correct project image source", () => {
    render(<FeaturedProject project={project} />)
    const image: HTMLImageElement = screen.getByRole("img")
    expect(image.src).toBe(
      `https://raw.githubusercontent.com/${data.infos.usernameGitHub}/${project.name}/${project.defaultBranchRef?.name}/screenshot.jpg`
    )
    expect(image.alt).toBe(longNameInTitleCase(project.name))
  })
})
