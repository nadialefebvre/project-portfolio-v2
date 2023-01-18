import React from "react"

import { cleanup, render, screen } from "@testing-library/react"

import Tech from "./Tech"
import data from "mapping-data/tech.json"

afterEach(cleanup)

describe("Tech component", () => {
  test("should render tech items", () => {
    render(<Tech />)
    data.tech.forEach((item) => {
      const techItem = screen.getByText(item.name)
      expect(techItem).toBeInTheDocument()
    })
  })
})
