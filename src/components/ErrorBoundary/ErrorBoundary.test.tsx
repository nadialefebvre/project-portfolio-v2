import React from "react"

import { cleanup, screen, render } from "@testing-library/react"

import ErrorBoundary from "./ErrorBoundary"

describe("ErrorBoundary", () => {
  afterEach(cleanup)

  it("renders children when there is no error", () => {
    render(
      <ErrorBoundary>
        <div>Hello World</div>
      </ErrorBoundary>
    )
    const children = screen.getByText("Hello World")
    expect(children).toBeInTheDocument()
  })
})
