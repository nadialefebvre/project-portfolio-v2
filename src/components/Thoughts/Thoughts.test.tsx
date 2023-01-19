import React from "react"

import { cleanup, render, screen } from "@testing-library/react"

import { Thoughts } from "components/Thoughts"
import { Provider as ReduxProvider } from "react-redux"
import { store } from "store/configureStore"

describe("Thoughts component", () => {
  afterEach(cleanup)

  test("should render the component", () => {
    const { container } = render(
      <ReduxProvider store={store}>
        <Thoughts />
      </ReduxProvider>
    )
    expect(container).toBeInTheDocument()
  })

  test("should display loader when fetching data", () => {
    render(
      <ReduxProvider store={store}>
        <Thoughts />
      </ReduxProvider>
    )
    const loader = screen.getByTestId("animation")
    expect(loader).toBeInTheDocument()
  })

  test("should display featured thoughts title", () => {
    render(
      <ReduxProvider store={store}>
        <Thoughts />
      </ReduxProvider>
    )
    const featuredThoughts = screen.getByText("My thoughts")
    expect(featuredThoughts).toBeInTheDocument()
  })
})
