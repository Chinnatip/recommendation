import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter } from 'react-router-dom'
import createStore from './store/Store'
const { store, history } = createStore()

const AppWithRouter = () => (
  <Provider store={store}>
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(<AppWithRouter />, document.getElementById('root'))
registerServiceWorker()
