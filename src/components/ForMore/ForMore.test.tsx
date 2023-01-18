import React from "react"

import { cleanup, render, screen } from "@testing-library/react"

import ForMore from "./ForMore"
import data from "mapping-data/user.json"

afterEach(cleanup)

describe("ForMore component", () => {
  test("should render links to socials", () => {
    render(<ForMore />)
    data.socials.forEach((item) => {
      const link = screen.getByTestId(item.name)
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute("href", item.url)
    })
  })
})