import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getPosts } from "services/post"

export interface IPost {
  userId: number
  id: number,
  title: string,
  body: string,
}

export interface PostState {
  posts: IPost[],
  status: string
}

const initialState: PostState = {
  posts: [],
  status: "idle"
}

export const postActions = {
  getPosts: createAsyncThunk(
    "post/getPosts",
    async () => await getPosts()
  )
}

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    updatePost: (state, action) => {
      const { id, title, body } = action.payload
      const post = state.posts.find(post => post.id === id)
      if (post) {
        post.title = title
        post.body = body
      }
    },
    removePost: (state, action) => {
      const id = action.payload
      state.posts = state.posts.filter(post => post.id !== id)
    }
  },
  extraReducers: {
    [postActions.getPosts.pending.type]: (state) => {
      state.status = "loading"
    },
    [postActions.getPosts.fulfilled.type]: (state, action) => {
      state.posts = action.payload
      state.status = "success"
    },
    [postActions.getPosts.rejected.type]: (state) => {
      state.status = "error"
    }
  }
})

// Action creators are generated for each case reducer function
export const { updatePost, removePost } = postSlice.actions

export default postSlice.reducer
