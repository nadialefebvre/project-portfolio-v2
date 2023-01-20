import React from "react"

import { Provider as ReduxProvider } from "react-redux"
import { cleanup, render, screen } from "@testing-library/react"

import Projects from "./Projects"
import { store } from "store/configureStore"

describe("Projects component", () => {
  afterEach(cleanup)

  test("should render the component", () => {
    const { container } = render(
      <ReduxProvider store={store}>
        <Projects />
      </ReduxProvider>
    )
    expect(container).toBeInTheDocument()
  })

  test("should display loader when fetching data", () => {
    render(
      <ReduxProvider store={store}>
        <Projects />
      </ReduxProvider>
    )
    const loader = screen.getByTestId("animation")
    expect(loader).toBeInTheDocument()
  })
})
