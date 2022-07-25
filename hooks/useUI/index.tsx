import { useSelector, useDispatch } from "react-redux"
import { openSidebar, closeSidebar, toggleSidebar } from "redux/slices/uiSlice"
import { RootState } from "redux/store"

export const useUI = () => {
  const dispatch = useDispatch()

  return {
    isOpenSidebar: useSelector((state: RootState) => state.ui.isOpenSidebar),
    openSidebar: () => dispatch(openSidebar()),
    closeSidebar: () => dispatch(closeSidebar()),
    toggleSidebar: () => dispatch(toggleSidebar())
  }
}
