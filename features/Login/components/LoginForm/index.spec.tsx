import userEvent from "@testing-library/user-event"
import { LoginForm } from "features/Login/components/LoginForm"
import { customRender, waitFor } from "test"

describe("LoginForm", () => {
  it("should have value of email that was write by user", async () => {
    const { getByLabelText } = customRender(<LoginForm />)
    const user = userEvent.setup()
    await user.type(getByLabelText("Email"), "test@gmail.com")

    await waitFor(() =>
      expect(getByLabelText("Email")).toHaveValue("test@gmail.com")
    )
  })

  it("should have value of password that was write by user", async () => {
    const { getByLabelText } = customRender(<LoginForm />)
    const user = userEvent.setup()
    await user.type(getByLabelText("Password"), "test")

    await waitFor(() =>
      expect(getByLabelText("Password")).toHaveValue("test")
    )
  })
})
