import React from "react"

import {
  FaLinkedinIn,
  FaStackOverflow,
  FaGithub,
  FaMediumM,
} from "react-icons/fa"

export const socialIcons: Map<string, JSX.Element> = new Map([
  ["Linkedin", <FaLinkedinIn />],
  ["Stack Overflow", <FaStackOverflow />],
  ["GitHub", <FaGithub />],
  ["Medium", <FaMediumM />],
])
