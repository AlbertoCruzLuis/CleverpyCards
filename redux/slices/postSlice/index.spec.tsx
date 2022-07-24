import { postActions, updatePost, removePost } from "redux/slices/postSlice"
import { store } from "redux/store"
import { getPosts } from "services/post"

describe("postSlice", () => {
  it("should be equal post of fetch to the state", async () => {
    const dispatch = store.dispatch
    await dispatch(postActions.getPosts())

    const postsFromState = store.getState().post.posts
    const postsFromFetch = await getPosts()

    expect(postsFromState).toEqual(postsFromFetch)
  })

  it("should be equal updated post to the original", async () => {
    const dispatch = store.dispatch
    const post = {
      userId: 1,
      id: 1,
      title: "title",
      body: "body"
    }

    dispatch(updatePost(post))

    const postsFromState = store.getState().post.posts
    const postFromState = postsFromState.find(p => p.id === post.id)

    expect(postFromState).toEqual(post)
  })

  it("should be equal removed post to the original", async () => {
    const dispatch = store.dispatch
    const post = {
      userId: 1,
      id: 1,
      title: "title",
      body: "body"
    }

    dispatch(removePost(post.id))

    const postsFromState = store.getState().post.posts
    const postFromState = postsFromState.find(p => p.id === post.id)

    expect(postFromState).toBeUndefined()
  })
})
