import { waitFor } from "@testing-library/react"
import { useUI } from "hooks/useUI"
import { customRenderHook } from "test"

describe("useUI", () => {
  test("useUI renders initially", async () => {
    const { result } = customRenderHook(() => useUI())

    await waitFor(() => {
      expect(result.current.isOpenSidebar).toBe(false)
    })
  })

  test("useUI open sidebar", async () => {
    const { result } = customRenderHook(() => useUI())

    await waitFor(() => {
      result.current.openSidebar()
      expect(result.current.isOpenSidebar).toBe(true)
    })
  })

  test("useUI close sidebar", async () => {
    const { result } = customRenderHook(() => useUI())

    await waitFor(() => {
      result.current.closeSidebar()
      expect(result.current.isOpenSidebar).toBe(false)
    })
  })
})
