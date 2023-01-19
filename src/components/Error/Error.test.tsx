import React from "react"

import { cleanup, render, screen } from "@testing-library/react"

import Error from "./Error"

describe("Error component", () => {
  afterEach(cleanup)

  test("should render the correct text for item and error", () => {
    const item = "projects"
    const error = "404 Not Found"
    render(<Error item={item} error={error} />)
    const itemText = screen.getByText(
      `There's an issue with the API fetching the ${item}:`
    )
    const errorText = screen.getByText(`Error: ${error}`)
    const refreshText = screen.getByText(
      "Please refresh the page, or try later."
    )
    expect(itemText).toBeInTheDocument()
    expect(errorText).toBeInTheDocument()
    expect(refreshText).toBeInTheDocument()
  })

  test("should not render error message when error is empty", () => {
    const item = "projects"
    const error = ""
    render(<Error item={item} error={error} />)
    expect(screen.queryByText("An error occurred")).toBeNull()
  })
})
