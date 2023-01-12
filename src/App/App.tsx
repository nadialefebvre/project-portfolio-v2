import React from "react"

import { Provider as ReduxProvider } from "react-redux"

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

const App = () => (
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
)

export default App
