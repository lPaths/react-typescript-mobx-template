import { observable, action } from 'mobx'

export interface AppStateTypes {
  isGlobalLoading?: boolean
  loading?: () => void
}

class AppState implements AppStateTypes {
  @observable isGlobalLoading = false

  @action
  loading = () => {
    this.isGlobalLoading = !this.isGlobalLoading
  }
}

export default AppState
