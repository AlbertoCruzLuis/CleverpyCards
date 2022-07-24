import { render, renderHook } from "@testing-library/react"
import { Providers } from "utils/providers"

export const customRender = (ui: React.ReactElement, options?: any) => {
  return render(ui, { wrapper: Providers, ...options })
}

export const customRenderHook = <T, >(hook: () => T) => {
  return renderHook(hook, { wrapper: Providers })
}

// re-export everything
export * from "@testing-library/react"
