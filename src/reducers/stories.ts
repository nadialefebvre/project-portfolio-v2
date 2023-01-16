import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { StoryInterface } from "components/Thoughts"

interface StoriesState {
  stories: StoryInterface[]
  isLoading: boolean
  error: string
}

const initialState: StoriesState = {
  stories: [],
  isLoading: true,
  error: "",
}

const stories = createSlice({
  name: "stories",
  initialState,
  reducers: {
    setStories: (state, action: PayloadAction<StoryInterface[]>) => {
      state.stories = action.payload
    },
    setIsLoading: (store, action) => {
      store.isLoading = action.payload
    },
    setError: (store, action) => {
      store.error = action.payload
    },
  },
})

export default stories
