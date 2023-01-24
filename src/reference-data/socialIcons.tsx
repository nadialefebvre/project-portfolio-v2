import React from "react"

import { FaLinkedinIn, FaGithub, FaMediumM } from "react-icons/fa"

export const socialIcons: Map<string, JSX.Element> = new Map([
  ["Linkedin", <FaLinkedinIn />],
  ["GitHub", <FaGithub />],
  ["Medium", <FaMediumM />],
])
