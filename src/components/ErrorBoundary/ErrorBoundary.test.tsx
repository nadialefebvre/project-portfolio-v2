import React from "react"

import { screen, render } from "@testing-library/react"

import ErrorBoundary from "./ErrorBoundary"

describe("ErrorBoundary", () => {
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
