import { combineReducers } from "@reduxjs/toolkit"

import repos from "reducers/repos"
import articles from "reducers/articles"

export const reducer = combineReducers({
  repos: repos.reducer,
  articles: articles.reducer,
})
