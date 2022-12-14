import data from "data/user.json"

export const githubQuery = `{
  search
    (first: 100,
    type: REPOSITORY,
    query: "user:${data.infos.usernameGitHub} fork:true project in:name")
    {
      nodes {
        ... repoFields
        ... on Repository {
          createdAt
        }
      }
    }

  user(login: "${data.infos.usernameGitHub}") {
    pinnedItems(last: 100, types: REPOSITORY) {
      nodes {
        ... repoFields
        ... on Repository {
          defaultBranchRef {
            name
          }
        }
      }
    }
  }
}

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
