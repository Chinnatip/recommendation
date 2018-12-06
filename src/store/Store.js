// Configure Store
import { createStore, applyMiddleware, compose } from 'redux'
import { createBrowserHistory, createMemoryHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import thunkMiddleware from 'redux-thunk'
import createRootReducer from './CombineReducer'
// import { createLogger } from 'redux-logger'

// Export Anonymous Store
export default () => {
  const history = createBrowserHistory()
  const enhancers = []
  const devToolsExtension = window.devToolsExtension
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
  const middleware = [thunkMiddleware, routerMiddleware(history)]
  const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
  )
  const initialState = {}
  const store = createStore(
    createRootReducer(history),
    initialState,
    composedEnhancers
  )
  return {
    store,
    history
  }
}
