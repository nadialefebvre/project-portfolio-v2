export interface Repo {
  id: string
  name: string
  description: string
  url: string
  homepageUrl: string
  createdAt: string
  repositoryTopics: RepositoryTopics
  defaultBranchRef: DefaultBranchRef
}

interface RepositoryTopics {
  nodes: NodeTopic[]
}

interface NodeTopic {
  topic: Topic
}

interface Topic {
  name: string
}

interface DefaultBranchRef {
  name: string
}
