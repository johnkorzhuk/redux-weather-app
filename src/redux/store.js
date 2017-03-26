import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import reducers from './reducers'

const middleWares = [
  thunk,
  logger
]

const enhancers = compose(
  applyMiddleware(...middleWares),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

export default createStore(
  reducers,
  undefined,
  enhancers
)
