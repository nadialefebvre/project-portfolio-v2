import React from "react"

import { cleanup, render, screen } from "@testing-library/react"

import App from "./App"

describe("App component", () => {
  afterEach(cleanup)

  test("renders Header component in App", () => {
    render(<App />)
    const textInHeader = screen.getByText(/^portfolio/i)
    expect(textInHeader).toBeInTheDocument()
  })

  test("should render Intro component in App", () => {
    render(<App />)
    const element = screen.getByText(/^Hello!/)
    expect(element).toBeInTheDocument()
  })

  test("should render Tech component in App", () => {
    render(<App />)
    const techSection = screen.getByTestId("Tech")
    expect(techSection).toBeInTheDocument()
    expect(techSection.tagName).toBe("SECTION")
  })

  test("should render Projects component in App", () => {
    render(<App />)
    const projectsSection = screen.getByTestId("Featured projects")
    expect(projectsSection).toBeInTheDocument()
    expect(projectsSection.tagName).toBe("SECTION")
  })

  test("should render Thoughts component in App", () => {
    render(<App />)
    const thoughtsSection = screen.getByTestId("My thoughts")
    expect(thoughtsSection).toBeInTheDocument()
    expect(thoughtsSection.tagName).toBe("SECTION")
  })

  test("should render Skills component in App", () => {
    render(<App />)
    const skillsSection = screen.getByTestId("Skills")
    expect(skillsSection).toBeInTheDocument()
    expect(skillsSection.tagName).toBe("SECTION")
  })

  test("should render ForMore component in App", () => {
    render(<App />)
    const forMoreSection = screen.getByTestId("For more")
    expect(forMoreSection).toBeInTheDocument()
    expect(forMoreSection.tagName).toBe("SECTION")
  })

  test("should render Footer component in App", () => {
    render(<App />)
    const textInFooter = screen.getByText(/^Contact/i)
    expect(textInFooter).toBeInTheDocument()
  })
})
