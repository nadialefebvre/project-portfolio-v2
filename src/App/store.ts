import { combineReducers, configureStore } from "@reduxjs/toolkit"

import repos from "reducers/repos"
import articles from "reducers/articles"

const reducer = combineReducers({
  repos: repos.reducer,
  articles: articles.reducer,
})

export const store = configureStore({ reducer })

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
