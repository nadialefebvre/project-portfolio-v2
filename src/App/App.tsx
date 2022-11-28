import React from "react"

import { ThemeProvider } from "styled-components"

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
)

export default App
