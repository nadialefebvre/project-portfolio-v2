import React from "react"

import { cleanup, render, screen } from "@testing-library/react"

import Section from "./Section"

afterEach(cleanup)

describe("Section", () => {
  const title = "Section Title"
  const extraTitle = " Extra Title"
  const children = <p>Some children</p>
  const featured = <p>Featured content</p>
  const subtitle = "Subtitle"
  const other = <p>Other content</p>

  test("should render the title and extraTitle correctly", () => {
    render(<Section title={title} extraTitle={extraTitle} />)
    const section = screen.getByTestId(title)
    expect(section.textContent).toContain(title + extraTitle)
  })

  test("should render children correctly", () => {
    render(
      <Section title={title} extraTitle={extraTitle}>
        {children}
      </Section>
    )
    const childrenContent = screen.getByText("Some children")
    expect(childrenContent).toBeInTheDocument()
  })
  test("should render featured content correctly", () => {
    render(
      <Section title={title} extraTitle={extraTitle} featured={featured} />
    )
    const featuredContent = screen.getByText("Featured content")
    expect(featuredContent).toBeInTheDocument()
  })

  test("should render subtitle correctly", () => {
    render(
      <Section title={title} extraTitle={extraTitle} subtitle={subtitle} />
    )
    const subtitleContent = screen.getByText(subtitle)
    expect(subtitleContent).toBeInTheDocument()
  })

  test("should render other content correctly", () => {
    render(<Section title={title} extraTitle={extraTitle} other={other} />)
    const otherContent = screen.getByText("Other content")
    expect(otherContent).toBeInTheDocument()
  })

  test("renders correctly with no props", () => {
    render(<Section />)
    expect(screen.queryByText(title)).toBeNull()
    expect(screen.queryByText(extraTitle)).toBeNull()
    expect(screen.queryByText(subtitle)).toBeNull()
    expect(screen.queryByText("Some children")).toBeNull()
  })

  test("renders correctly with some props", () => {
    render(<Section title={title} children={children} />)
    expect(screen.getByText(title)).toBeInTheDocument()
    expect(screen.queryByText(extraTitle)).toBeNull()
    expect(screen.queryByText(subtitle)).toBeNull()
    expect(screen.getByText("Some children")).toBeInTheDocument()
  })
})
