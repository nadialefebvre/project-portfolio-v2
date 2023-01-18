import React from "react"

import { cleanup, render, screen } from "@testing-library/react"

import Header from "./Header"
import data from "mapping-data/user.json"

afterEach(cleanup)

describe("Header component", () => {
  test("should render the correct data", () => {
    render(<Header />)
    const name = screen.getByText(data.infos.name)
    const devTitle = screen.getByText(data.infos.devTitle)
    const otherTitle = screen.getByText(`+ ${data.infos.otherTitle}`)
    const image: HTMLImageElement = screen.getByAltText(data.infos.name)
    expect(name).toBeInTheDocument()
    expect(devTitle).toBeInTheDocument()
    expect(otherTitle).toBeInTheDocument()
    expect(image).toBeInTheDocument()
    expect(image.title).toEqual(`${data.infos.name}, ${data.infos.devTitle}`)
  })

  test("should render the correct links", () => {
    render(<Header />)
    data.socials.forEach((item) => {
      const link = screen.getByTestId(item.name)
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute("href", item.url)
      expect(link).toHaveAttribute("target", "_blank")
      expect(link).toHaveAttribute("rel", "noopener noreferrer")
    })
  })

  test("should not display otherTitle if empty", () => {
    data.infos.otherTitle = ""
    render(<Header />)
    const otherTitle = screen.queryByText(`+ ${data.infos.otherTitle}`)
    expect(otherTitle).toBeNull()
  })
})
