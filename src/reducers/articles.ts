import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { Article } from "components/Thoughts/Thoughts.types"

interface ArticlesState {
  articles: Article[]
  isLoading: boolean
}

const initialState: ArticlesState = {
  articles: [],
  isLoading: true,
}

const articles = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setArticles: (state, action: PayloadAction<Article[]>) => {
      state.articles = action.payload
    },
    setIsLoading: (store, action) => {
      store.isLoading = action.payload
    },
  },
})

export default articles
