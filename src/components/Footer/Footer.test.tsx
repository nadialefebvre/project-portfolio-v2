import React from "react"

import { cleanup, render, screen } from "@testing-library/react"

import data from "mapping-data/user.json"
import Footer from "./Footer"

afterEach(cleanup)

describe("Footer component", () => {
  test("should render contact information", () => {
    render(<Footer />)
    const name = screen.getByText(data.infos.name)
    const email = screen.getByText(data.infos.email)
    expect(name).toBeInTheDocument()
    expect(email).toBeInTheDocument()
    expect(email).toHaveAttribute("href", `mailto:${data.infos.email}`)
  })
})
