import React from "react"

import { render, screen } from "@testing-library/react"

import OtherProject from "./OtherProject"
import { RepoInterface } from "components/Projects"
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

describe("OtherProject component", () => {
  test("should render the project title, description and tags", () => {
    render(<OtherProject project={project} />)
    const title = screen.getByText(/^mocked project/i)
    const description = screen.getByText(/This is a mocked project/i)
    const tags = screen.getAllByText(/topic/i)
    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(tags.length).toBe(2)
  })

  test("should render the project title and description with a link to the repository", () => {
    render(<OtherProject project={project} />)
    const titleLink = screen.getByRole("link", { name: /mocked project/i })
    const descriptionLink = screen.getByRole("link", {
      name: /This is a mocked project/i,
    })
    expect(titleLink).toHaveAttribute("href", project.url)
    expect(descriptionLink).toHaveAttribute("href", project.url)
  })
})
