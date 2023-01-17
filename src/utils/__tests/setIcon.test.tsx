import React from "react"

import { FaLinkedinIn } from "react-icons/fa"

import { setIcon } from "utils/setIcon"

describe("setIcon function", () => {
  test("should return FaLinkedinIn icon", () => {
    expect(setIcon("Linkedin")).toEqual(<FaLinkedinIn />)
  })
})
