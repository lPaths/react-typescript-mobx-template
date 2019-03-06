import { observable, action } from 'mobx'

class AppState {
  @observable isMenuCollapse = false

  @action
  handleSiderCollapse () {
    this.isMenuCollapse = !this.isMenuCollapse
  }
}

export default AppState