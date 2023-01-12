import React from "react"

import { Provider as ReduxProvider } from "react-redux"

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  // gql,
} from "@apollo/client"

import { ThemeProvider } from "styled-components"

import { store } from "store/configureStore"

import { theme } from "constants/theme"

import {
  Header,
  Intro,
  Tech,
  Projects,
  Thoughts,
  Skills,
  ForMore,
  Footer,
} from "components"

import { GlobalStyle } from "App/App.styles"

import { githubEndpoint, GITHUB_TOKEN } from "constants/github"

export const client = new ApolloClient({
  uri: githubEndpoint,
  headers: {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
  },
  cache: new InMemoryCache(),
})

const App = () => (
  <ApolloProvider client={client}>
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Intro />
        <Tech />
        <Projects />
        <Thoughts />
        <Skills />
        <ForMore />
        <Footer />
      </ThemeProvider>
    </ReduxProvider>
  </ApolloProvider>
)

export default App
