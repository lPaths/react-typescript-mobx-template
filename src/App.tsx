import React, { Component } from 'react'
import { Layout, Button, Icon } from 'antd'
import 'antd/dist/antd.css'
import { inject, observer } from 'mobx-react'

import AppMenu from  './layout/Sider'
import PageContent from './components/PageContent.js'

const { Sider } = Layout

@inject('stores')
@observer
class App extends Component<any> {
  handleToggle = () => {
    this.props.stores.appState.handleSiderCollapse()
  }

  render () {
    const { isMenuCollapse } = this.props.stores.appState
    return (
      <>
        <Layout tagName='main' style={{ minHeight: '100vh' }}>
          <Sider
            theme='light'
            collapsible
            breakpoint='lg'
            collapsed={isMenuCollapse}
            onCollapse={this.handleToggle}
          >
            <AppMenu />
          </Sider>
          <PageContent />
        </Layout>
      </>
    )
  }
}

export default App
