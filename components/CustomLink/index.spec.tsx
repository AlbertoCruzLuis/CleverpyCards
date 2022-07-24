import { CustomLink } from "components/CustomLink"
import { customRender } from "test"

describe("CustomLink", () => {
  it("should be a link that have href value to '/login'", () => {
    const { getByRole } = customRender(<CustomLink href="/login">Link</CustomLink>)
    const link = getByRole("link", { name: "Link" })
    expect(link.getAttribute("href")).toBe("/login")
  })
})
