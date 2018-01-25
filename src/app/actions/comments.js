import * as types from './types'

export const writeCommentAction = (comment) => ({
  type: types.SUBMIT_COMMENT_REQUEST,
  comment
})

export const loadCommentsAction = postId => ({
  type: types.LOAD_COMMENTS_REQUEST,
  postId
})

export const loadComments = (comments) => ({
  type: types.LOAD_COMMENTS_SUCCESS,
  comments
})

export const commentAdded = (comment) => ({
  type: types.SUBMIT_COMMENT_SUCCESS,
  comment
})