import { PostCard } from "features/Post/components/PostCard"
import { usePost } from "features/Post/hooks/usePost"

export const PostSection = () => {
  const { posts } = usePost()

  return (
    <div className="grid grid-cols-3 gap-8 xs:grid-cols-1 sm:grid-cols-2">
      {posts.map(post =>
        <PostCard
          key={post.id}
          id={post.id}
          title={post.title}
          description={post.body}
          user={{
            id: post.userId
          }}
        />
      )}
    </div>
  )
}
