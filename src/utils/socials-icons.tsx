import React from "react"

import {
  FaLinkedinIn,
  FaStackOverflow,
  FaGithub,
  FaMediumM,
} from "react-icons/fa"

export const setIcon = (name: string) => {
  if (name === "Linkedin") return <FaLinkedinIn />
  else if (name === "Stack Overflow") return <FaStackOverflow />
  else if (name === "GitHub") return <FaGithub />
  else if (name === "Medium") return <FaMediumM />
}
