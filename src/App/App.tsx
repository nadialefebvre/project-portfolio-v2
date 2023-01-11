import React from "react"

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client"

import { Provider as ReduxProvider } from "react-redux"

import { ThemeProvider } from "styled-components"

import { store } from "store/configureStore"

import { theme } from "constants/theme"

import { githubEndpoint, GITHUB_TOKEN } from "constants/github"

// import {
//   Header,
//   Intro,
//   Tech,
//   Projects,
//   Thoughts,
//   Skills,
//   ForMore,
//   Footer,
// } from "components"

import { GlobalStyle } from "App/App.styles"

import { githubQuery } from "utils/github-query"

const client = new ApolloClient({
  uri: githubEndpoint,
  headers: {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
  },
  cache: new InMemoryCache(),
})

client
  .query({
    query: githubQuery})
  .then((result) => console.log(result))

const App = () => (
  <ApolloProvider client={client}>
    <ReduxProvider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {/* <Header />
        <Intro />
        <Tech />
        <Projects />
        <Thoughts />
        <Skills />
        <ForMore />
        <Footer /> */}
      </ThemeProvider>
    </ReduxProvider>
  </ApolloProvider>
)

export default App
