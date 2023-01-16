import React from "react"

import { ApolloProvider } from "@apollo/client"
import { Provider as ReduxProvider } from "react-redux"
import { ThemeProvider } from "styled-components"

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
import { client } from "graphql/client"
import { store } from "store/configureStore"
import { theme } from "styles/theme"

import { GlobalStyle } from "App/App.styles"

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
