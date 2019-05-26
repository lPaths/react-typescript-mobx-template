import React, { Component } from 'react'
import { inject, observer } from 'mobx-react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { StorageTypes, AppStateTypes } from './stores'

import { LoadableComponent } from './components/Loadable'
import { noAuthenRoutes } from './routers/routes'

import LoadingBar from './components/Loading'
import NotFound from './pages/404'

@inject((storage: StorageTypes) => storage.stores)
@observer
class App extends Component<AppStateTypes> {
  render () {
    const {
      props: { appState = { isGlobalLoading: false } }
    } = this
    return (
      <div>
        <div style={{ height: 3 }}>
          {appState.isGlobalLoading && <LoadingBar />}
        </div>
        <Router>
        <>
          <Switch>
            {noAuthenRoutes.map((route, index) => {
              const { path, exact } = route
              return (
                <Route
                  key={index.toString()}
                  exact={exact}
                  path={path}
                  render={() => {
                    const Comp = LoadableComponent(import(`./pages${path}`))
                    return <Comp />
                  }}
                />
            )})}
            <Route component={NotFound} />
          </Switch>
        </>
      </Router>
      </div>
    )
  }
}

export default App
