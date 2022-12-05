import { createSlice, PayloadAction } from "@reduxjs/toolkit"

import { Article } from "components/Thoughts/Thoughts.types"

import data from "data/user.json"

import { AppDispatch } from "App/store"

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

export const fetchArticles = () => {
  return (dispatch: AppDispatch) => {
    dispatch(articles.actions.setIsLoading(true))
    fetch(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${data.infos.usernameMedium}`
    )
      .then((res) => res.json())
      .then((res) => {
        dispatch(articles.actions.setArticles(res.items))
        dispatch(articles.actions.setIsLoading(false))
      })
      .catch((err) => console.log(err))
  }
}

export default articles
