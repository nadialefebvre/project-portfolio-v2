import React from "react"

import { cleanup, render, screen } from "@testing-library/react"

import Loader from "./Loader"

describe("Loader component", () => {
  afterEach(cleanup)

  test("should render the animation", () => {
    render(<Loader />)
    const animation = screen.getByTestId("animation")
    expect(animation).toBeInTheDocument()
  })
})
