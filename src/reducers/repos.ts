import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { Repo } from "components/Projects/Projects.types"

import { AppDispatch } from "App/store"

import ui from "./ui"
import { githubQuery } from "utils/github-query"

const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN

interface ReposState {
  allRepos: Repo[]
  pinnedRepos: Repo[]
}

const initialState: ReposState = {
  allRepos: [],
  pinnedRepos: [],
}

const repos = createSlice({
  name: "repos",
  initialState,
  reducers: {
    setAllRepos: (state, action: PayloadAction<Repo[]>) => {
      state.allRepos = action.payload
    },
    setPinnedRepos: (state, action: PayloadAction<Repo[]>) => {
      state.pinnedRepos = action.payload
    },
  },
})

export const fetchTest = () => {
  return (dispatch: AppDispatch) => {
    dispatch(ui.actions.setLoading(true))
    fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
      body: JSON.stringify({
        query: githubQuery,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        dispatch(repos.actions.setAllRepos(res.data.search.nodes))
        dispatch(repos.actions.setPinnedRepos(res.data.user.pinnedItems.nodes))
        dispatch(ui.actions.setLoading(false))
      })
      .catch((err) => console.log(err))
  }
}

export default repos
