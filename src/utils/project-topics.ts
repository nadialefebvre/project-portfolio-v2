import { Repo } from "components/Projects/Projects.types"

import { devTopics } from "data/devTopics"
import { techTopicsDictionary } from "data/techTopicsDictionary"

export const fixProjectTopic = (topic: string) => {
  if (techTopicsDictionary.has(topic)) {
    return techTopicsDictionary.get(topic)
  } else {
    return `${topic.charAt(0).toUpperCase()}${topic.slice(1)}`
  }
}

// allows the items NOT in the dictionary to be added at the end
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

const setTopics = (project: Repo) =>
  project.repositoryTopics.nodes.map((topic) => topic.topic.name)

export const topicsListFeatured = (project: Repo) => {
  const topicsToKeep = setTopics(project).filter(
    (topic) => !devTopics.includes(topic)
  )
  return sortTopics(topicsToKeep)
}

export const topicsListOther = (project: Repo) => {
  const topicsToKeep = setTopics(project).filter(
    (topic) =>
      topic ===
        setTopics(project).find((element) => devTopics.includes(element)) ||
      !devTopics.includes(topic)
  )
  return sortTopics(topicsToKeep)
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
