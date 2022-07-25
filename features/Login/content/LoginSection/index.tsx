import { Logo } from "components/Logo"
import { LoginForm } from "features/Login/components/LoginForm"

export const LoginSection = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex flex-col items-center gap-4">
        <Logo width="120" height="120" />
        <span className="text-2xl text-neutral-200">Sign in to Cleverpy</span>
      </div>
      <LoginForm />
    </div>
  )
}
