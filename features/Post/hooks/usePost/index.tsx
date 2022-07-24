import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { updatePost, removePost, IPost, postActions } from "redux/slices/postSlice"
import { AppDispatch, RootState } from "redux/store"

export const usePost = () => {
  const dispatch = useDispatch<AppDispatch>()
  const postsStatus = useSelector((state: RootState) => state.post.status)

  useEffect(() => {
    if (postsStatus === "idle") {
      dispatch(postActions.getPosts())
    }
  }, [])

  return {
    posts: useSelector((state: RootState) => state.post.posts),
    updatePost: (post: IPost) => dispatch(updatePost(post)),
    removePost: (postId: number) => dispatch(removePost(postId))
  }
}
