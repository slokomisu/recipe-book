import React from 'react'
import ReactDOM from 'react-dom'
import './dist/semantic.min.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { ConnectedRouter as Router } from 'react-router-redux'
import { Provider } from 'react-redux'
import configureStore, { history } from './store'

const store = configureStore({})

const CombinedApp = () => (
  <Provider store={store}>
    <Router history={history}>
      <App/>
    </Router>
  </Provider>
)

ReactDOM.render(<CombinedApp/>, document.getElementById('root'))
registerServiceWorker()
