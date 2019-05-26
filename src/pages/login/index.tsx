import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { Link } from 'react-router-dom'

import { StorageTypes, AppStateTypes } from '@stores'

@inject((storage: StorageTypes) => storage.stores)
@observer
class LoginScreen extends Component<AppStateTypes> {
  render () {
    const {
      props: {
        appState = { loading: () => console.log('err') }
      }
    } = this
    return (
      <>
        <button onClick={() => appState.loading && appState.loading()}>Click</button>
        <Link to='register'>Login</Link>
      </>
    )
  }
}

export default LoginScreen