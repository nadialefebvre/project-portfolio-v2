import React from "react"

import {
  FaLinkedinIn,
  FaStackOverflow,
  FaGithub,
  FaMediumM,
} from "react-icons/fa"

const iconMap = new Map([
  ["Linkedin", <FaLinkedinIn />],
  ["Stack Overflow", <FaStackOverflow />],
  ["GitHub", <FaGithub />],
  ["Medium", <FaMediumM />],
])

export const setIcon = (name: string) => iconMap.get(name)
