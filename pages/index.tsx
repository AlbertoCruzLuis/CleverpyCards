import { PostSection } from "features/Post/content/PostSection"
import { PageLayout } from "layouts/PageLayout"
import type { NextPage } from "next"

const Home: NextPage = () => {
  return (
    <PageLayout>
      <PostSection />
    </PageLayout>
  )
}

export default Home
