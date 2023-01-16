import { ApolloClient, InMemoryCache } from "@apollo/client"

import { githubEndpoint, GITHUB_TOKEN } from "constants/github"

export const client = new ApolloClient({
  uri: githubEndpoint,
  headers: {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
  },
  cache: new InMemoryCache(),
})
