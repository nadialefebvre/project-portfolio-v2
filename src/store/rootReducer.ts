import { combineReducers } from "@reduxjs/toolkit"

import repos from "reducers/repos"
import stories from "reducers/stories"

export const reducer = combineReducers({
  repos: repos.reducer,
  stories: stories.reducer,
})
