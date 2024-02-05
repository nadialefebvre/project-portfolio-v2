import { gql } from "@apollo/client"

import { fragment } from "graphql/fragment"
import data from "mapping-data/user.json"

export const githubQuery = gql`
  ${fragment}

  {
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
  }`
