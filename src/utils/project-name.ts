export const shortName = (name: string) => {
  const projectName = name.replace("project-", "").replaceAll("-", " ")

  return projectName
}

export const longNameInTitleCase = (name: string) => {
  const projectName = name
    .split("-")
    .map((word: string) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(" ")

  return projectName
}
