import { devTopics } from "reference-data/devTopics"
import { techTopicsDictionary } from "reference-data/techTopicsDictionary"
import { projectTypes } from "reference-data/projectTypes"
import { RepoInterface } from "components/Projects"

export const fixProjectTopic = (topic: string) => {
  if (techTopicsDictionary.has(topic)) {
    return techTopicsDictionary.get(topic)
  } else {
    return `${topic.charAt(0).toUpperCase()}${topic.slice(1)}`
  }
}

export const sortTopics = (topics: string[]) => {
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

const setTopics = (project: RepoInterface) =>
  project.repositoryTopics.nodes.map((topic) => topic.topic.name)

export const topicsListFeatured = (project: RepoInterface) => {
  const topicsToKeep = setTopics(project).filter(
    (topic) => !devTopics.includes(topic)
  )

  return sortTopics(topicsToKeep)
}

export const topicsListOther = (project: RepoInterface) => {
  const topicsToKeep = setTopics(project).filter(
    (topic) =>
      topic ===
        setTopics(project).find((element) => devTopics.includes(element)) ||
      !devTopics.includes(topic)
  )

  return sortTopics(topicsToKeep)
}

export const projectType = (project: RepoInterface) => {
  const projectTopic = project.repositoryTopics.nodes.map(
    ({ topic }) => topic.name
  )
  const foundType = Array.from(projectTypes.keys()).find((topic) =>
    projectTopic.includes(topic)
  )

  if (foundType !== undefined) {
    return projectTypes.get(foundType)
  } else {
    return projectTypes.get("default")
  }
}
