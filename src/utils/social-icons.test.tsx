import React from "react"

import { FaLinkedinIn } from "react-icons/fa"

import { setIcon } from "utils/socials-icons"

describe("social-icons", () => {
  it("setIcon should return `Dec 2022`", () => {
    expect(setIcon("Linkedin")).toEqual(<FaLinkedinIn />)
  })
})
