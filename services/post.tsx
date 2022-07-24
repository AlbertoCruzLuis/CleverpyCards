import { config } from "config"
import { IPost } from "redux/slices/postSlice"

export const getPosts = async () => {
  const response = await fetch(config.postApiUrl)
  const posts: IPost[] = await response.json()
  return posts
}
