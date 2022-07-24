import { Button } from "components/Button"
import { AiOutlinePlusCircle } from "react-icons/ai"
import { customRender } from "test"

describe("Button Primary", () => {
  it("renders correctly", () => {
    const { container } = customRender(<Button variant="primary">Primary Button</Button>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders correctly with size large", () => {
    const { container } = customRender(<Button variant="primary" size="large">Primary Button</Button>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders correctly with icon", () => {
    const { container } = customRender(<Button variant="primary" icon={<AiOutlinePlusCircle />}>Primary Button</Button>)
    expect(container.firstChild).toMatchSnapshot()
  })
})

describe("Button Secondary", () => {
  it("renders correctly", () => {
    const { container } = customRender(<Button variant="secondary">Secondary Button</Button>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders correctly with size large", () => {
    const { container } = customRender(<Button variant="secondary" size="large">Secondary Button</Button>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders correctly with icon", () => {
    const { container } = customRender(<Button variant="secondary" icon={<AiOutlinePlusCircle />}>Secondary Button</Button>)
    expect(container.firstChild).toMatchSnapshot()
  })
})

describe("Button Tertiary", () => {
  it("renders correctly", () => {
    const { container } = customRender(<Button variant="tertiary">Tertiary Button</Button>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders correctly with size large", () => {
    const { container } = customRender(<Button variant="tertiary" size="large">Tertiary Button</Button>)
    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders correctly with icon", () => {
    const { container } = customRender(<Button variant="tertiary" icon={<AiOutlinePlusCircle />}>Tertiary Button</Button>)
    expect(container.firstChild).toMatchSnapshot()
  })
})
