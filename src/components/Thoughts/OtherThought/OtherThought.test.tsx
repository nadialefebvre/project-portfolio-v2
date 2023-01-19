import React from "react"

import { cleanup, render, screen } from "@testing-library/react"

import OtherThought from "./OtherThought"
import { mockedThought } from "mocks/mockedThought"
import { formattedDate } from "utils/formattedDate"

describe("FeaturedThought component", () => {
  afterEach(cleanup)

  test("should render the thought image, title, text and tags", () => {
    render(<OtherThought thought={mockedThought} />)
    const date = screen.getByText(`${formattedDate(mockedThought.pubDate)}.`)
    const title = screen.getByText(mockedThought.title)
    expect(date).toBeInTheDocument()
    expect(title).toBeInTheDocument()
  })
})
