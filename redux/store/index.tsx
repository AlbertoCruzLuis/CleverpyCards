import { configureStore } from "@reduxjs/toolkit"
import postSlice from "redux/slices/postSlice"
import uiSlice from "redux/slices/uiSlice"

export const store = configureStore({
  reducer: {
    post: postSlice,
    ui: uiSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
