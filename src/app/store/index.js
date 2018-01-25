import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import rootSaga from '../sagas'

export default (initialState = {}) => {
  // Create the saga middleware
  const sagaMiddleware = createSagaMiddleware()

  const store = createStore(
    rootReducer,
    initialState = {
      posts: []
    },
    applyMiddleware(sagaMiddleware) // eslint-disable-line comma-dangle
  )

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers') // eslint-disable-line global-require
      store.replaceReducer(nextReducer)
    })
  }

  sagaMiddleware.run(rootSaga)

  return store
}
