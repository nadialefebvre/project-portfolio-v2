import React from "react"

import { cleanup, render, screen } from "@testing-library/react"

import Loader from "./Loader"

afterEach(cleanup)

describe("Loader component", () => {
  test("should render the animation", () => {
    render(<Loader />)
    const animation = screen.getByTestId("animation")
    expect(animation).toBeInTheDocument()
  })
})
