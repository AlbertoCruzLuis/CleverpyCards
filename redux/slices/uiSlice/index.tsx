import { createSlice } from "@reduxjs/toolkit"

export interface UIState {
  isOpenSidebar: boolean
}

const initialState: UIState = {
  isOpenSidebar: false
}

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openSidebar: (state) => {
      state.isOpenSidebar = true
    },
    closeSidebar: (state) => {
      state.isOpenSidebar = false
    },
    toggleSidebar: (state) => {
      state.isOpenSidebar = !state.isOpenSidebar
    }
  }
})

export const { openSidebar, closeSidebar, toggleSidebar } = uiSlice.actions

export default uiSlice.reducer
