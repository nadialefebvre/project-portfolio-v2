import React from "react"

import { Provider } from "react-redux"

import { ThemeProvider } from "styled-components"

import { store } from "store/configureStore"

import { theme } from "utils/theme"

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
  <Provider store={store}>
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
  </Provider>
)

export default App
