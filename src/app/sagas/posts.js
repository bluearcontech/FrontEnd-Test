import { call, put, takeEvery } from 'redux-saga/effects'
import { loadPosts } from '../actions/posts'
import * as Api from '../services/posts'
import * as types from '../actions/types'

export function* loadPostsRequest() {
  try {
    const posts = yield call(Api.loadPosts)
    yield put(loadPosts(posts))
  } catch (e) {
    console.log('error occur :', e)
  }
}

export function* watchLoadPostsRequest() {
  yield takeEvery(types.LOAD_POSTS_REQUEST, loadPostsRequest)
}
