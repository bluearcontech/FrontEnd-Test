import * as types from '../actions/types'

const initialState = {
  submit: false,
  comments: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_COMMENTS_SUCCESS:
      return {
        ...state, comments: action.comments, submit: false
      }
    case types.SUBMIT_COMMENT_REQUEST:
      return {
        ...state, submit: true
      }
    case types.SUBMIT_COMMENT_SUCCESS:
      return {
        ...state, comments: [...state.comments, action.comment], submit: false
      }
    default:
      return state
  }
}