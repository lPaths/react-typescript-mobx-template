import React from 'react'
import { render } from 'react-dom'
import App from './App'
import './index.less'

import { Provider } from 'mobx-react'
import { stores } from './stores'

import * as serviceWorker from './serviceWorker'

render(
  <Provider stores={stores}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.register()
