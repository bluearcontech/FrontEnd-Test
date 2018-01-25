import * as types from './types'

export const loadPostsRequest = () => ({
  type: types.LOAD_POSTS_REQUEST,
})

export const loadPosts = posts => ({
  type: types.LOAD_POSTS,
  posts,
})
