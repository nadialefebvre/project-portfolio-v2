export const fragment = `
  fragment repoFields on Repository {
    id
    name
    description
    url
    homepageUrl
    repositoryTopics(first: 100) {
      nodes {
        topic {
          name
        }
      }
    }
  }`
