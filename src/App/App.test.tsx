import React from "react"
import { render, screen } from "@testing-library/react"
import App from "./App"

test("renders email address", () => {
  render(<App />)
  const element = screen.getByText(/dev.nadialefebvre@gmail.com/i)
  expect(element).toBeInTheDocument()
})
