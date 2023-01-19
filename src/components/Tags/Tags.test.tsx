import React from "react"

import { cleanup, render, screen } from "@testing-library/react"

import Tags from "./Tags"

describe("Tags", () => {
  afterEach(cleanup)

  const list = ["react", "javascript", "frontend"]
  const fixTopic = (item: string) => item.toUpperCase()
  const isItalic = true

  test("should render the tags correctly", () => {
    render(<Tags list={list} fixTopic={fixTopic} isItalic={isItalic} />)
    list.forEach((item) => {
      const tag = screen.getByText(`#${fixTopic(item)}`)
      expect(tag).toBeInTheDocument()
    })
  })

  test("should apply styles correctly", () => {
    render(<Tags list={list} fixTopic={fixTopic} isItalic={isItalic} />)
    list.forEach((item) => {
      const tag = screen.getByText(`#${fixTopic(item)}`)
      expect(tag).toHaveStyle("font-style: italic")
    })
  })

  test("should not render any tag when list is empty", () => {
    render(<Tags list={[]} fixTopic={fixTopic} isItalic={true} />)
    expect(screen.queryByText("#")).toBeNull()
  })
})
