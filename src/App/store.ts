import { combineReducers, configureStore } from "@reduxjs/toolkit"

import repos from "reducers/repos"
import ui from "reducers/ui"

const reducer = combineReducers({
  ui: ui.reducer,
  repos: repos.reducer,
})

export const store = configureStore({ reducer })

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
