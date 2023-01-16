import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { RepoInterface } from "components/Projects"

interface ReposState {
  allRepos: RepoInterface[]
  pinnedRepos: RepoInterface[]
  isLoading: boolean
  error: string
}

const initialState: ReposState = {
  allRepos: [],
  pinnedRepos: [],
  isLoading: true,
  error: "",
}

const repos = createSlice({
  name: "repos",
  initialState,
  reducers: {
    setAllRepos: (state, action: PayloadAction<RepoInterface[]>) => {
      state.allRepos = action.payload
    },
    setPinnedRepos: (state, action: PayloadAction<RepoInterface[]>) => {
      state.pinnedRepos = action.payload
    },
    setIsLoading: (store, action) => {
      store.isLoading = action.payload
    },
    setError: (store, action) => {
      store.error = action.payload
    },
  },
})

export default repos
