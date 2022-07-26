import { Background } from "components/Background"
import { useAuth } from "hooks/useAuth"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import ScaleLoader from "react-spinners/ScaleLoader"

interface IFullScreenLoaderProps {
  children: React.ReactNode
}

export const FullScreenLoader = ({ children }: IFullScreenLoaderProps) => {
  const { isAuth } = useAuth()
  const [isLoading, setLoading] = useState(true)
  const router = useRouter()

  const showLoader = () => {
    const isLoginPage = router.pathname === "/login"
    const isShowLoader = isAuth === isLoginPage
    setLoading(isShowLoader)
  }

  useEffect(() => {
    setTimeout(() => {
      showLoader()
    }, 800)
  }, [router, isAuth])

  if (!isLoading) {
    return (
      <>
        {children}
      </>
    )
  }

  return (
    <Background>
      <div className="flex items-center justify-center h-screen">
        <ScaleLoader color="#fff" />
      </div>
    </Background>
  )
}
