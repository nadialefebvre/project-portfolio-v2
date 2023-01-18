import React from "react"

import { cleanup } from "@testing-library/react"
import { FaLinkedinIn } from "react-icons/fa"

import { setIcon } from "utils/setIcon"

afterEach(cleanup)

describe("setIcon function", () => {
  test("should return FaLinkedinIn icon", () => {
    expect(setIcon("Linkedin")).toEqual(<FaLinkedinIn />)
  })
})
