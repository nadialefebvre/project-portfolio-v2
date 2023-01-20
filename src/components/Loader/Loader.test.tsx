import React from "react"

import { cleanup, render, screen } from "@testing-library/react"

import Loader from "./Loader"

describe("Loader component", () => {
  afterEach(cleanup)

  test("should render the animation", () => {
    render(<Loader title="Featured projects" />)
    const title = screen.getByText("Featured projects")
    const animation = screen.getByTestId("animation")
    expect(title).toBeInTheDocument()
    expect(animation).toBeInTheDocument()
  })

  test("should display the title", () => {
    render(<Loader title="Featured projects" />)
    const title = screen.getByText("Featured projects")
    expect(title).toBeInTheDocument()
  })
})
