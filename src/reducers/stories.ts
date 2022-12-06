import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { Story } from "components/Thoughts/Thoughts.types"

interface StoriesState {
  stories: Story[]
  isLoading: boolean
}

const initialState: StoriesState = {
  stories: [],
  isLoading: true,
}

const stories = createSlice({
  name: "stories",
  initialState,
  reducers: {
    setStories: (state, action: PayloadAction<Story[]>) => {
      state.stories = action.payload
    },
    setIsLoading: (store, action) => {
      store.isLoading = action.payload
    },
  },
})

export default stories
