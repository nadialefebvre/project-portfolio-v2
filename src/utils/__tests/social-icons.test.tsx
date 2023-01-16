import React from "react"

import { FaLinkedinIn } from "react-icons/fa"

import { setIcon } from "utils/setIcon"

describe("social icons", () => {
  it("setIcon should return FaLinkedinIn icon", () => {
    expect(setIcon("Linkedin")).toEqual(<FaLinkedinIn />)
  })
})
