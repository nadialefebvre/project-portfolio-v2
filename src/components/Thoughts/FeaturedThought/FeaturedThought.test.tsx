import React from "react"

import { cleanup, render, screen } from "@testing-library/react"

import { mockedThought } from "mocks/mockedThought"
import { formattedDate } from "utils/formattedDate"
import FeaturedThought from "./FeaturedThought"

describe("FeaturedThought component", () => {
  afterEach(cleanup)

  test("should render the thought image, title, text and tags", () => {
    render(<FeaturedThought thought={mockedThought} />)
    const image = screen.getByAltText(mockedThought.title)
    const date = screen.getByText(formattedDate(mockedThought.pubDate))
    const title = screen.getByText(mockedThought.title)
    const text = screen.getByText(/^This is a mocked story/i)
    const tags = screen.getAllByText(/topic/i)
    expect(image).toBeInTheDocument()
    expect(date).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(text).toBeInTheDocument()
    expect(tags.length).toBe(3)
  })
})
