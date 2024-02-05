import React from "react"

import { cleanup, render, screen } from "@testing-library/react"

import data from "mapping-data/user.json"
import Intro from "./Intro"

describe("Intro component", () => {
  afterEach(cleanup)

  test("should render intro text", () => {
    render(<Intro />)
    const introText = screen.getByText(data.infos.introText)
    expect(introText).toBeInTheDocument()
  })
})
