import React from 'react'
import { render } from 'react-dom'
import App from './App'

import { Provider } from 'mobx-react'
import AppState from './stores/appState'

import * as serviceWorker from './serviceWorker'

const stores = {
  appState: new AppState()
}

render(
  <Provider stores={stores}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.register()
