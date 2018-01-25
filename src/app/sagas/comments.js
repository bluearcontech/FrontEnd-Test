import { call, put, takeEvery } from 'redux-saga/effects'
import { delay } from "redux-saga"
import * as Api from '../services/comments'
import * as types from '../actions/types'
import { loadComments, commentAdded } from '../actions/comments'

export function* submitCommentRequest(action) {
  try {
    const response = yield call(Api.writeComment, action.comment)
    yield call(delay, 1000)
    yield put(commentAdded(response))
  } catch (e) {
    // yield put(showMessageRequest(e))
  }
}

export function* loadCommentRequest(action) {
  try {
    const response = yield call(Api.loadComments, parseInt(action.postId, 10))
    yield put(loadComments(response))
  } catch (e) {
    console.log('error occur:', e)
  }
}

export function* watchWriteCommentRequest() {
  yield takeEvery(types.SUBMIT_COMMENT_REQUEST, submitCommentRequest)
}

export function* watchLoadCommentsRequest() {
  yield takeEvery(types.LOAD_COMMENTS_REQUEST, loadCommentRequest)
}
