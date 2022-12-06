import { configureStore } from "@reduxjs/toolkit"

import { reducer } from "store/rootReducer"

export const store = configureStore({ reducer })
