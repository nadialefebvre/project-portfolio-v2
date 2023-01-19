import React from "react"

import { cleanup, render, screen } from "@testing-library/react"

import OtherProject from "./OtherProject"
import { mockedProject } from "mocks/mockedProject"

describe("OtherProject component", () => {
  afterEach(cleanup)

  test("should render the project title, description and tags", () => {
    render(<OtherProject project={mockedProject} />)
    const title = screen.getByText(/^mocked/i)
    const description = screen.getByText(/This is a mocked project/i)
    const tags = screen.getAllByTestId("topic")
    expect(title).toBeInTheDocument()
    expect(description).toBeInTheDocument()
    expect(tags.length).toBe(12)
  })

  test("should render the project title and description with a link to the repository", () => {
    render(<OtherProject project={mockedProject} />)
    const titleLink = screen.getByRole("link", { name: /mocked project/i })
    const descriptionLink = screen.getByRole("link", {
      name: /This is a mocked project/i,
    })
    expect(titleLink).toHaveAttribute("href", mockedProject.url)
    expect(descriptionLink).toHaveAttribute("href", mockedProject.url)
  })
})
