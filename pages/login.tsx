import { Background } from "components/Background"
import { LoginSection } from "features/Login/content/LoginSection"
import { useAuth } from "hooks/useAuth"
import type { NextPage } from "next"

const Home: NextPage = () => {
  useAuth()

  return (
    <Background>
      <div className="flex items-center justify-center h-screen">
        <LoginSection />
      </div>
    </Background>
  )
}

export default Home
