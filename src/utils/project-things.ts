import { Repo } from "components/Projects/Projects.types"

import { setTopics } from "utils/topics-things"

export const shortProjectName = (name: string) => {
  const projectName = name.replace("project-", "").replaceAll("-", " ")
  return projectName
}

// used only once, maybe put it back in its component?
export const longProjectNameTitleCase = (name: string) => {
  const projectName = name
    .split("-")
    .map((word: string) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(" ")
  return projectName
}

// used only once, maybe put it back in its component?
export const projectType = (project: Repo) => {
  if (setTopics(project).includes("fullstack")) {
    return "Fullstack web app"
  } else if (setTopics(project).includes("mobile")) {
    return "Mobile app"
  } else if (setTopics(project).includes("backend")) {
    return "RESTful API"
  } else {
    return "Frontend web app"
  }
}
