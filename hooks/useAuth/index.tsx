import { IFormValues } from "features/Login/components/LoginForm"
import { useGlobalLocalStorage } from "hooks/useGlobalLocalStorage"
import { useRouter } from "next/router"
import { useEffect } from "react"
import toast from "react-hot-toast"
import { loginPost } from "services/auth"

export const useAuth = () => {
  const router = useRouter()
  const [isAuth, setAuth] = useGlobalLocalStorage<boolean>("auth")

  const redirectToLoginOrHome = (isAuth: boolean | undefined) => {
    if (isAuth) {
      router.push("/")
    } else {
      router.push("/login")
    }
  }

  useEffect(() => {
    const isLoad = isAuth !== undefined
    if (router && isLoad) {
      redirectToLoginOrHome(isAuth)
    }
  }, [isAuth])

  const logIn = async (data: IFormValues) => {
    const userName = data.email.split("@")[0]
    const isUserGranted = await loginPost(userName, data.password)

    if (isUserGranted) {
      setAuth(true)
    }

    if (!isUserGranted) {
      toast.error("Invalid email or password")
    }
  }

  const logOut = () => {
    setAuth(false)
  }

  return {
    isAuth,
    logIn,
    logOut
  }
}
