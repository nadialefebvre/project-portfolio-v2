import { Repo } from "components/Projects/Projects.types"

export const fixProjectName = (project: Repo) =>
  project.name.replace("project-", "").replaceAll("-", " ")
