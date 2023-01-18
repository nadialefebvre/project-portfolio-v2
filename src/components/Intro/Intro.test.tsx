import React from "react"

import { cleanup, render, screen } from "@testing-library/react"

import Intro from "./Intro"
import data from "mapping-data/user.json"

afterEach(cleanup)

describe("Intro component", () => {
  test("should render intro text", () => {
    render(<Intro />)
    const introText = screen.getByText(data.infos.introText)
    expect(introText).toBeInTheDocument()
  })
})
