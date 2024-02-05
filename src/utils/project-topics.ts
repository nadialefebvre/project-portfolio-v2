import { RepoInterface } from "components/Projects"
import { projectTypes } from "reference-data/projectTypes"
import { techTopicsDictionary } from "reference-data/techTopicsDictionary"

export const fixSingleProjectTopic = (topic: string) => {
  if (techTopicsDictionary.has(topic)) {
    return techTopicsDictionary.get(topic)
  } else {
    return `${topic.charAt(0).toUpperCase()}${topic.slice(1)}`
  }
}

const setProjectTopicsList = (project: RepoInterface) =>
  project.repositoryTopics.nodes.map(({ topic }) => topic.name)

const projectTypesList = Array.from(projectTypes.keys())

const findProjectType = (project: RepoInterface) =>
  projectTypesList.find((topic) =>
    setProjectTopicsList(project).includes(topic)
  )

const setProjectTopicsToKeep = (project: RepoInterface) =>
  setProjectTopicsList(project).filter(
    (topic) => !projectTypesList.includes(topic)
  )

const sortProjectTopics = (topics: string[]) => {
  const techTopicsOrder = Array.from(techTopicsDictionary.keys())

  const sortedTopics = topics.sort((a, b) => {
    if (techTopicsOrder.includes(a) && techTopicsOrder.includes(b)) {
      return techTopicsOrder.indexOf(a) - techTopicsOrder.indexOf(b)
    } else if (techTopicsOrder.includes(a)) {
      return -1
    } else if (techTopicsOrder.includes(b)) {
      return 1
    }
    return 0
  })

  return sortedTopics
}

export const setFeaturedProjectTopicsList = (project: RepoInterface) =>
  sortProjectTopics(setProjectTopicsToKeep(project))

export const setOtherProjectTopicsList = (project: RepoInterface) => {
  const topicsToKeep = setProjectTopicsToKeep(project)
  const foundType = findProjectType(project)

  if (foundType !== undefined) {
    topicsToKeep.push(foundType)
  } else {
    topicsToKeep.push("frontend")
  }

  return sortProjectTopics(topicsToKeep)
}

export const setProjectTitle = (project: RepoInterface) => {
  const foundType = findProjectType(project)

  if (foundType !== undefined) {
    return projectTypes.get(foundType)
  } else {
    return "frontend"
  }
}
