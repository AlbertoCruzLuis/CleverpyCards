import { Avatar } from "features/Post/components/Avatar"
import { customRender } from "test"

describe("Avatar", () => {
  it("renders correctly", () => {
    const { container } = customRender(<Avatar seed="123" />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
