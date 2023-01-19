import React from "react"

import { cleanup, render, screen } from "@testing-library/react"

import Skills from "./Skills"

jest.mock("mapping-data/skills.json", () => ({
  categories: [
    {
      title: "Category1",
      skills: ["skill1", "skill2", "skill3"],
    },
    {
      title: "Category2",
      skills: ["skill4", "skill5"],
    },
    {
      title: "Category3",
      skills: [],
    },
  ],
}))

describe("Skills component", () => {
  afterEach(cleanup)

  test("should render the correct data including only the categories with skills", () => {
    render(<Skills />)
    const category1 = screen.getByText("Category1")
    const skill1 = screen.getByText("skill1")
    const skill2 = screen.getByText("skill2")
    const skill3 = screen.getByText("skill3")
    const category2 = screen.getByText("Category2")
    const skill4 = screen.getByText("skill4")
    const skill5 = screen.getByText("skill5")
    const category3 = screen.queryByText("Category3")
    expect(category1).toBeInTheDocument()
    expect(skill1).toBeInTheDocument()
    expect(skill2).toBeInTheDocument()
    expect(skill3).toBeInTheDocument()
    expect(category2).toBeInTheDocument()
    expect(skill4).toBeInTheDocument()
    expect(skill5).toBeInTheDocument()
    expect(category3).not.toBeInTheDocument()
  })
})
