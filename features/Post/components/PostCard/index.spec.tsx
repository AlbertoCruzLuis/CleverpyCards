import { PostCard } from "features/Post/components/PostCard"
import { customRender } from "test"

const post = {
  id: 1,
  userId: 1,
  title: "Post 1",
  body: "Post 1 body"
}

describe("PostCard", () => {
  it("renders correctly", () => {
    const { container } = customRender(
      <PostCard
        id={post.id}
        title={post.title}
        description={post.body}
        user={{
          id: post.userId
        }}
      />
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
