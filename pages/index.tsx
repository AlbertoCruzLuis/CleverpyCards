import { PostSection } from "features/Post/content/PostSection"
import { useAuth } from "hooks/useAuth"
import { PageLayout } from "layouts/PageLayout"
import type { NextPage } from "next"

const Home: NextPage = () => {
  useAuth()

  return (
    <PageLayout>
      <PostSection />
    </PageLayout>
  )
}

export default Home
