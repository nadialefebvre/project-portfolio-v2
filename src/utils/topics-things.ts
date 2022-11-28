export const devTopics = ["fullstack", "backend", "mobile", "frontend"]

const techTopicsDictionary = new Map([
  ["frontend", "Frontend"],
  ["backend", "Backend"],
  ["fullstack", "Fullstack"],
  ["mobile", "Mobile"],
  ["javascript", "JavaScript"],
  ["typescript", "TypeScript"],
  ["react", "React"],
  ["redux", "Redux"],
  ["react-router", "React Router"],
  ["nodejs", "Node.js"],
  ["express", "Express"],
  ["mongodb", "MongoDB"],
  ["react-native", "React Native"],
  ["html", "HTML"],
  ["css", "CSS"],
  ["materialui", "Material UI"],
  ["styled-components", "Styled components"],
  ["graphql", "GraphQL"],
  ["nextjs", "Next.js"],
  ["api", "API"],
  ["figma", "Figma"],
  ["cms", "CMS"],
])

export const fixProjectTopic = (topic: string) => {
  if (techTopicsDictionary.has(topic)) {
    return techTopicsDictionary.get(topic)
  } else {
    return `${topic.charAt(0).toUpperCase()}${topic.slice(1)}`
  }
}

export const fixThoughtTopic = (topic: string) => topic.replaceAll("-", "")

// allows the items NOT in the dictionary to be added at the end
export const sortTopics = (topics: string[]) => {
  const techTopicsOrder = Array.from(techTopicsDictionary.keys())
  return topics.sort((a, b) => {
    if (techTopicsOrder.includes(a) && techTopicsOrder.includes(b)) {
      return techTopicsOrder.indexOf(a) - techTopicsOrder.indexOf(b)
    } else if (techTopicsOrder.includes(a)) {
      return -1
    } else if (techTopicsOrder.includes(b)) {
      return 1
    }
    return 0
  })
}
