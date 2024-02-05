import { ApolloClient, InMemoryCache } from "@apollo/client"

import { GITHUB_TOKEN, githubEndpoint } from "constants/github"

export const client = new ApolloClient({
  uri: githubEndpoint,
  headers: {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
  },
  cache: new InMemoryCache(),
})
