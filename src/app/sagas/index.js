import { fork } from 'redux-saga/effects'

import { watchLoadPostsRequest } from './posts'
import { watchWriteCommentRequest, watchLoadCommentsRequest } from './comments'

export default function* rootSaga() {
  yield [
    fork(watchLoadPostsRequest),
    fork(watchWriteCommentRequest),
    fork(watchLoadCommentsRequest)
  ]
}
