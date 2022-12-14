import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { Repo } from "components/Projects/Projects.types"

interface ReposState {
  allRepos: Repo[]
  pinnedRepos: Repo[]
  isLoading: boolean
}

const initialState: ReposState = {
  allRepos: [],
  pinnedRepos: [],
  isLoading: true,
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
    setIsLoading: (store, action) => {
      store.isLoading = action.payload
    },
  },
})

export default repos
