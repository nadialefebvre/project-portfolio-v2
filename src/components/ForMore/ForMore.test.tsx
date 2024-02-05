import React from "react"

import { cleanup, render, screen } from "@testing-library/react"

import data from "mapping-data/user.json"
import ForMore from "./ForMore"

describe("ForMore component", () => {
  afterEach(cleanup)

  test("should render links to socials", () => {
    render(<ForMore />)
    data.socials.forEach((item) => {
      const link = screen.getByTestId(item.name)
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute("href", item.url)
    })
  })
})
