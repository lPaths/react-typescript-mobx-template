import React, { Component } from 'react'
import { Layout, Icon, Menu } from 'antd'
import 'antd/dist/antd.css'
import { observer, inject } from 'mobx-react'

const MenuItem = Menu.Item

@inject('stores')
@observer
class AppMenu extends Component<any> {
  render () {
    const { isMenuCollapse } = this.props.stores.appState
    return (
      <Menu
        theme='light'
        defaultSelectedKeys={['1']}
        mode='inline'
        inlineCollapsed={isMenuCollapse}
      >
        <MenuItem key='1'>
          <Icon type='home' />
          <span>Option 1</span>
        </MenuItem>
        <MenuItem key='2'>
        <Icon type='desktop' />
          <span>Option 2</span>
        </MenuItem>
        <MenuItem key='3'>
        <Icon type='inbox' />
          <span>Option 3</span>
        </MenuItem>
      </Menu>
    )
  }
}

export default AppMenu
