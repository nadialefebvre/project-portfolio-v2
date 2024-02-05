import React from "react"

import { cleanup, render, screen } from "@testing-library/react"

import data from "mapping-data/user.json"
import { mockedProject } from "mocks/mockedProject"
import { longNameInTitleCase } from "utils/project-name"
import FeaturedProject from "./FeaturedProject"

describe("FeaturedProject component", () => {
  afterEach(cleanup)

  test("should render the project image, title, description and tags", () => {
    render(<FeaturedProject project={mockedProject} />)
    const image = screen.getByAltText(longNameInTitleCase(mockedProject.name))
    const title = screen.getByText(/fullstack web app/i)
    const description = screen.getByText(mockedProject.description)
    const tags = screen.getAllByTestId("topic")
    expect(image).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(tags.length).toBe(11)
  })

  test("should render the correct project image source", () => {
    render(<FeaturedProject project={mockedProject} />)
    const image: HTMLImageElement = screen.getByRole("img")
    const username = data.infos.usernameGitHub
    const projectName = mockedProject.name
    const defaultBranch = mockedProject.defaultBranchRef?.name
    expect(image.src).toBe(
      `https://raw.githubusercontent.com/${username}/${projectName}/${defaultBranch}/screenshot.jpg`
    )
    expect(image.alt).toBe(longNameInTitleCase(mockedProject.name))
  })
})
